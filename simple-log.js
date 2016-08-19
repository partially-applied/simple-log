var colors, lo, defaultConfig, log;
colors = require('colors/safe');
lo = require('lodash');
defaultConfig = {
  colors: {
    error: colors.red,
    imp: colors.yellow
  },
  stack: {
    min: 1,
    max: 5
  },
  display: {
    stack: true,
    generic: true
  }
};
log = function(config){
  config == null && (config = {});
  this.params = lo.defaultsDeep(config, defaultConfig);
};
log.of = function(x){
  var output;
  output = new log(x);
  return output;
};
log.prototype.generic = function(message){
  var error;
  error = this.params.colors.error;
  if (this.params.display.generic) {
    console.log(error(message));
  }
};
log.prototype.stack = function(start, end){
  var stack;
  start == null && (start = this.params.stack.min);
  end == null && (end = this.params.stack.max);
  stack = new Error().stack.split('\n').splice(start, end).join('\n');
  if (this.params.display.stack) {
    this.generic(stack);
  }
};
module.exports = log.of;