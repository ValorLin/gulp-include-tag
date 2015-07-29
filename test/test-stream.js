var array = require('stream-array');
var File = require('gulp-util').File;

module.exports = function () {
    var args = Array.prototype.slice.call(arguments);
    var i = 0;

    function create(options) {
        var cwd = options.cwd;
        var contents = options.contents;
        return new File({
            cwd: cwd,
            path: cwd + '/file' + (i++).toString() + '.html',
            contents: new Buffer(contents),
            stat: {mode: 0666}
        });
    }

    return array(args.map(create))
};