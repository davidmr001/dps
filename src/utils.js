const chalk = require('chalk');
const ora = require('ora');

function calcText(str) {
  if(str.length > 40) {
      return str.slice(0, 15) + '...' + (str.match(/([\/\\][^\/\\]+)$/) || ['', ''])[1];
  }
  return str;
}

function log() {
  console.log.apply(console, arguments);
}

log.error = function(msg, exit) {
  log(chalk.red(msg));
  exit && process.exit(0);
}

log.info = function(msg) {
  log(chalk.greenBright(msg));
}

exports.log = log;
exports.calcText = calcText;
exports.getAgrType = function(agr) {
  return Object.prototype.toString.call(agr).split(/\s/)[1].slice(0, -1).toLowerCase();
}
exports.Spinner = function(color) {
  const spinner = ora({
    spinner: {
      "interval": 125,
      "frames": [
        "∙∙∙",
        "●∙∙",
        "∙●∙",
        "∙∙●",
        "∙∙∙"
      ]
    }
  }).start();
  spinner.color = color;
  return spinner;
}

exports.emoji = require('node-emoji');

exports.toBase64 = function(str) {
  return new Buffer(str).toString('base64');
}