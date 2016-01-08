# [gulp](http://gulpjs.com)-inject-bacon 

Gulp plugin for [baconipsum](https://www.npmjs.com/package/baconipsum) in your html templates



## Install

```bash
npm install --save-dev gulp-inject-bacon
```

## Example

```javascript
var fileinclude = require('gulp-file-include');
var injectbacon = require('gulp-inject-bacon');

gulp.task('fileinclude', function() {
  gulp.src([html_build])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(injectbacon())
    .pipe(gulp.dest(html_output))
});
});
```

## More

Suggestions welcome


## License

MIT © [Jerry Price](https://github.com/jjpmann)
