# 1.12

- Update from the upstream (Bug fix: removed infinity loop when using the G format specifier with a zero value.)

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
