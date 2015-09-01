'use strict';
var assert = require('assert');
var path = require('path');

var test = require('./test-stream');
var includeTag = require('../');

function normalize(str) {
	return str
		.replace(/\r\n/g, '\n')
		.replace(/\s+/gi, '');
}

it('should include file', function (cb) {
	test({
		cwd: path.join(__dirname, '/fixtures'),
		contents: [
			'<include src="./header.html"></include>' +
			'<include src="./footer.html"></include>' +
			'<script type="text/javascript" src="path/to/includeTag.browser.js"></script>'
		].join('\n')
	})
		.pipe(includeTag())
		.on('data', function (file) {
			assert.strictEqual(
				normalize(file.contents.toString()),
				normalize([
					'<header>',
					'    <ul>',
					'        <li>Home</li>',
					'        <li>Article</li>',
					'        <li>About</li>',
					'    </ul>',
					'</header>',
					'<footer>Footer</footer>'
				].join('\n'))
			);
		})
		.on('end', cb);
});
