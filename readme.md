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

Input

```html
      <h2>{baconipsum:5}</h2>  
      <p>{baconipsum:60}</p>  
      <h3>{baconipsum:3}</h3>  
      <p>{baconipsum:10}</p>  
```

Output

```html
      <h2>Duis ribeye beef ribs, anim dolore.</h2>
      <p>Enim do beef ribs sunt occaecat short ribs meatloaf ham hock capicola venison sirloin consequat pork loin meatball officia cupidatat hamburger ad commodo ut spare ribs bresaola corned beef bresaola jerky consequat tongue eiusmod in hamburger pork chop aute chuck sausage sirloin officia in elit andouille nulla kevin. Anim esse deserunt proident shankle ex consectetur in shankle rump aute beef ribs fugiat short ribs boudin tenderloin shank id elit.</p>
      <h3>Bresaola cow elit.</h3>
      <p>Pork loin drumstick! Ut, quis? Et irure shank bacon bacon laboris.</p>
````

## More

Suggestions welcome


## License

MIT © [Jerry Price](https://github.com/jjpmann)
