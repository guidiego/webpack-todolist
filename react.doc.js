var Docer = require('react-prop-table');
var fs = require('fs');
var shell = require('shelljs');

shell.rm('-Rf', 'docs');
shell.mkdir('docs');

function callback(err) {}

function ReadDir(dir) {
  fs.readdir(dir, function (err, files) {
    if (!files) return;
    files.forEach(function (file) {
      if (file.indexOf('.js') < 0 ) {
        ReadDir(dir + '/' + file)
      } else if (file.indexOf('.js') >= 0) {
        fs.readFile(dir + '/' + file, function (err, data) {
          var content = Docer.markdown(data, {});
          fs.writeFile('docs/' + file.replace('.js', '.md'), content, callback)
        })
      }
    })
  })
}

ReadDir('./src/components');
ReadDir('./src/containers');
