#!/usr/bin/env node
var express     = require('express'),
    program     = require('commander'),
    jadeStatic  = require('connect-jade-static'),
    path        = require('path'),
    browserSync = require('browser-sync');


program
  .version('0.0.1')
  .option('-p,  --path [path]', 'Specify path to serve files from. (Leave empty for current directory)')
  .option('-j,  --jade', 'If to use jade rendering')
  .option('     --port [port]', 'Specify port')
  .parse(process.argv);

var directory = process.cwd();
if (program.path)
 directory = path.join(__dirname, program.path);

var app = express();

if (program.jade)
  app.use(jadeStatic({
    baseDir: directory,
    baseUrl: '/',
    jade: {
      pretty: true
    }
  }));
else
  app.use(express.static(directory));


var server = app.listen(program.port || 3000, function () {
  var port = server.address().port;
  browserSync.init(null, {
    proxy: 'http://localhost:' + port,
    files: [directory + '/**/*.*'],
    port: 7000
  });

  console.log('Running Express at http://localhost:%s', port);
  console.log('Running Browser-sync at http://localhost:%s', 7000);
});
