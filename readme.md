# gulp-include-tag

> Gulp plugin for [include-tag](https://github.com/weilao/include-tag).


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

## License
MIT © [威老](http://doctype-html.com)
