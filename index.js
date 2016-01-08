'use strict';

var through = require('through2');
var gutil = require('gulp-util');
var baconipsum = require('baconipsum');

module.exports = function (opts) {
  opts = opts ? opts : {};

  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-inject-bacon', 'Streaming not supported'));
      return;
    }

    try {
      if (file.sourceMap) {
        opts.sourcemaps = {
          from : file.relative || file.path,
          map : {
            annotation: false
          }
        };
      }

      
      var content = file.contents.toString();
      var match;

      if (typeof content == 'string') {

        var re = /{baconipsum:(\d+)}/i

        while (match = content.match(re)){
            //console.log( match );
            content = content.replace(match[0], baconipsum(match[1]))
            file.contents = new Buffer(content);

            //file.contents(content);
            
        }
      }



      cb(null, file);

    } catch (err) {
      cb(new gutil.PluginError('gulp-inject-bacon', err, {fileName: file.path}));
      this.emit('error', new gutil.PluginError('gulp-inject-bacon', err));
    }

  });
};
