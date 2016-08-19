colors = require 'colors/safe'

lo = require 'lodash'

default-config =
	colors:
		*error:colors.red
			imp:colors.yellow
	stack:
		*min:1
			max:5
	display:
		*stack:true
			generic:true


log = (config = {}) !-> 

	@params = lo.defaults-deep config,default-config


log.of = (x) -> 

	output = new log x

	output

log.prototype.generic = (message) !->

	{error} = @params.colors

	if @params.display.generic

		console.log error message

log.prototype.stack = (start = @params.stack.min,end = @params.stack.max) !-> 

	stack = (((new Error!).stack.split '\n').splice start,end).join '\n'

	if @params.display.stack

		@generic stack





module.exports = log.of