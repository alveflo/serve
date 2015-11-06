#!/usr/bin/env node
var express     = require('express'),
    program     = require('commander'),
    jadeStatic  = require('connect-jade-static'),
    path        = require('path');


program
  .version('0.0.1')
  .option('-p,  --path [path]', 'Specify path to serve files from')
  .option('-j,  --jade', 'If to use jade rendering')
  .option('     --port [port]', 'Specify path to serve files from')
  .parse(process.argv);

if (!program.path) {
  console.log('Please specifiy path. E.g.:');
  console.log('\tserve -p public/');
  return;
}

var app = express();

if (program.jade)
  app.use(jadeStatic({
    baseDir: path.join(__dirname, program.path),
    baseUrl: '/',
    jade: {
      pretty: true
    }
  }));
else
  app.use(express.static(program.path));

var server = app.listen(program.port || 3000, function () {
  var port = server.address().port;
  console.log('Listening at :%s', port);
});
