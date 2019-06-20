# 1.16

- Fix: format strings like `%yy` were interpreted as `yy` whereas .NET interprets it as `y""y`
- Updates from upstream (rounding/precision issues; custom date/time specifiers: `y`, `yyy`, `yyyy`, `yyyyy`)

# 1.13

- Support single custom date/time format specifiers: `{0:%h}`
- Support custom date/time specifiers: offset (`z`, `zz`, `zzz`), fractional seconds (`f`, `FF`, etc.)
- Update from the upstream (fix: midnight and noon was incorrectly formatted when using 12-hour clock)

# 1.12

- Update from the upstream (fix: removed infinity loop when using the G format specifier with a zero value.)

# 1.11

- Pulled updates from the upstream (v1.11, [read more](https://github.com/dmester/sffjs/releases)).
- Added the ability to run the tests on Node.js.

# 1.10 (fork)

- Bug fix: genitive forms for months (needed for Slavic languages)
- Added support for AMD and CommonJS. The global object and other native
  objects such as String aren't modified if the library is loaded
  via AMD or CommonJS.
- The sffjs object is a function now. It's the same function that is
  assigned to String.format.

The pre-fork change log is available [here](https://github.com/dmester/sffjs/releases).
