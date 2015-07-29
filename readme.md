# gulp-include-tag [![Build Status](https://travis-ci.org/weilao/gulp-include-tag.svg?branch=master)](https://travis-ci.org/weilao/gulp-include-tag)

> My first-rate gulp plugin


## Install

```
$ npm install --save-dev gulp-include-tag
```


## Usage

```js
var gulp = require('gulp');
var includeTag = require('gulp-include-tag');

gulp.task('default', function () {
	return gulp.src('src/index.html')
		.pipe(includeTag())
		.pipe(gulp.dest('dist'));
});
```


## API

### includeTag(options)

## License

MIT © [威老](http://doctype-html.com)
