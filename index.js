'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var includeTag = require('include-tag');
var path = require('path');

module.exports = function (options) {
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            cb(new gutil.PluginError('gulp-include-tag', 'Streaming not supported'));
            return;
        }

        try {
            file.contents = new Buffer(includeTag(
				path.dirname(file.path),
                file.contents
					.toString()
					// Remove includeTag.browser.js
					.replace(/<script.*?includeTag.browser.js.*?<\/script>\r?\n?/gi, '')
            ));
            this.push(file);
        } catch (err) {
            this.emit('error', new gutil.PluginError('gulp-include-tag', err));
        }

        cb();
    });
};
