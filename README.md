# ValueError
[![Build Status](https://travis-ci.org/thefourtheye/ValueError.svg?branch=master)](https://travis-ci.org/thefourtheye/ValueError)
[![Coverage Status](https://coveralls.io/repos/thefourtheye/ValueError/badge.svg?branch=master&service=github)](https://coveralls.io/github/thefourtheye/ValueError?branch=master)

ValueError, an instance of Error, for Node.js

---

Installation
============

    npm install ValueError

Usage
=====

Same as the `Error` constructor function. For example,

```js
var ValueError = require('ValueError');
...
throw new ValueError('Input cannot have underscores');
```

The `new` is optional here. So the above code can be written as

```js
throw ValueError('Input cannot have underscores');
```

Similarly, the `ValueError` can be used to check the instance like this

```js
new ValueError() instanceof ValueError // true
new ValueError() instanceof Error      // true
```
