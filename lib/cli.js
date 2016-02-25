var info = require('../lib');
var meow = require('meow');

var scripts = info();

var cli = meow([
  'Usage',
  '  npm-scripts-info [hr]',
  '',
  'Options',
  ' --help, -h         Display usage',
  ' --reporter, -r     Specify the custom reporter to be used',
  '',
  'Examples',
  '  npm-scripts-info -r=my-reporter'
].join('\n'), {
  string: ['reporter'],
  alias: {
    reporter: 'r',
    help: 'h'
  }
});

cli.flags.reporter
  ? require('npm-scripts-info-' + cli.flags.reporter)(scripts)
  : require('../lib/reporter')(scripts);