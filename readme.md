# String.format for JavaScript

[![Build Status](https://travis-ci.org/thorn0/sffjs.svg?branch=master)](https://travis-ci.org/thorn0/sffjs)
[![npm](https://img.shields.io/npm/v/sffjs.svg)](https://www.npmjs.com/package/sffjs)

Copyright (c) 2009-2017 Daniel Mester Pirttijärvi

Fork by Georgii Dolzhykov

## Description

This is a JavaScript library for string, date and number formatting.
Formatting is done with format strings and is almost completely compatible with the String.Format method in Microsoft .NET Framework.

The goal of this fork is to add support for Node.js and to explore compatibility with .NET.

Links to the original library: [home page with usage examples](http://mstr.se/sffjs), [repo](https://github.com/dmester/sffjs).

[Reference information regarding .NET format strings](http://msdn.microsoft.com/en-us/library/system.string.format.aspx)

## In the browser

To use the library, include the library itself and optionally the cultures you
are targeting. Note that if no culture files are included, the invariant
culture will be used.

```html
<script src="sffjs.min.js"></script>
<script src="cultures/stringformat.en.js"></script>
<script src="cultures/stringformat.sv.js"></script>
```

Then you're ready to go.

```js
String.format("Welcome back, {0}! Last seen {1:M}", "John Doe", new Date(1985, 3, 7, 12, 33));

// Outputs:
// Welcome back, John Doe! Last seen April 07
```

By default the browser culture will be used, given that the appropriate culture
file has been referenced from the page. To set culture explicitly, use the
`sffjs.setCulture` method, which accepts a IETF language code.

```js
sffjs.setCulture("sv");
```

## Node.js

```js
var sffjs = require('sffjs');
console.log(sffjs("Welcome back, {0}! Last seen {1:M}", "John Doe", new Date(1985, 3, 7, 12, 33)));

// Outputs:
// Welcome back, John Doe! Last seen April 07
```

Built-in objects aren't modified unless you explicitly call `sffjs.unsafe()`.
```js
console.log(typeof String.format);
// undefined
sffjs.unsafe();
console.log(typeof String.format);
// function
```

Cultures are loaded automatically by the `setCulture` method. There is no need to `require` them.
```js
console.log(sffjs("{0:N} -- {1:M}", 1234.567, new Date(1985, 3, 7, 12, 33)));
// 1,234.57 -- April 07
sffjs.setCulture("tr");
console.log(sffjs("{0:N} -- {1:M}", 1234.567, new Date(1985, 3, 7, 12, 33)));
// 1.234,57 -- 07 Nisan
```

## Compatibility with .NET

The output of this library is highly compatible with the output from the .NET
implementation. In this section differences will be listed

* Date format
    * Date format specifier `O` is not supported
    * Date format specifier `R` is not supported

* Number format
    * Number format specifier `c` ignores specified precision
    * Number format specifier `G` formats the number according to how a double is formatted in .NET. Other numeric data type are formatted differently in .NET.

Other types don't have a format implementation, and are thus serialized to a
string by the `__Format` function or the Javascript runtime using the `toString` function.

These are additions in this implementation, and thus not supported by the .NET implementation:

* Object paths/named parameters (`String.format('Hello, {user.name}', { user: { name: 'John' } })`).
