

## simple-log

#### helper functions for logging

```

npm install @partially-applied/simple-log

```

### How to use

```livescript


simple-log = require '@partially-applied/simple-log'


log = simple-log.of! # its possible to pass a config param to the constructor

# log has only functions

log.generic 'Error: Test Error'

log.stack! # logs the stack error


```

## Options

```livescript

colors = require 'colors/safe'

# defaults

colors:
    *error:colors.red # color of text
stack:
    *min:1 # start line of stack error string
     max:5 # end line of stack error string
display:
    *stack:true # set false to turn off logging for stack error
     generic:true # set false to turn off logging for generic error

```


### Notes

- Setting generic to `false` **will also silence stack** 

### Changing Configration

- changing stack options from function 

```livescript

simple-log = require '@partially-applied/simple-log'

log = simple-log.of!

log.stack 0,2

# Error
#    at log.stack (C:\working\simple-log\simple-log.js:38:11)

log.stack 1,3

# at log.stack (C:\working\simple-log\simple-log.js:38:11)
#    at Object.<anonymous> (C:\working\simple-log\test.js:7:8)
#    at Module._compile (module.js:409:26)

```

- changing `display.stack` option

```livescript

simple-log = require '@partially-applied/simple-log'

log = simple-log.of (display:(stack:false))


log.stack! # nothing gets logged - no side effects.

```
