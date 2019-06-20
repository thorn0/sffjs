/*jshint undef:true, node:true*/
/*global sffjs*/
"use strict";

var child_process = require('child_process'),
    process = require('process'),
    path = require('path'),
    fs = require('fs');

var exe = path.join(__dirname, 'checker.exe'),
    src = path.join(__dirname, 'checker.cs');

if (!fs.existsSync(exe)) {
    var csc = path.join(
        process.env.WINDIR,
        'Microsoft.NET',
        process.arch === 'x64' ? 'Framework64' : 'Framework',
        'v4.0.30319',
        'csc.exe'
    );
    child_process.execSync(csc + ' /out:' + JSON.stringify(exe) + ' ' + JSON.stringify(src), { encoding: 'utf8' });
}
if (!fs.existsSync(exe)) {
    throw new Error('Can\'t find checker.exe');
}

module.exports = function() {
    var arg = {
        format: arguments[0],
        args: Array.prototype.slice.call(arguments, 1),
        culture: sffjs.LC.name || undefined
    };
    var resultJson = child_process.execFileSync(exe, [stringifyJsonCommandLineArgument(arg)], { encoding: 'utf8' });
    var result = JSON.parse(resultJson);
    if (result.Error) {
        throw new Error(result.Error);
    } else if (arg.format !== result.Format) {
        throw new Error('Format string got corrupted "' + arg.format + '" -> "' + result.Format + '"');
    } else {
        return result.ReturnValue;
    }
};

function padWithLeadingZeros(string) {
    return new Array(5 - string.length).join("0") + string;
}

function unicodeCharEscape(charCode) {
    return "\\u" + padWithLeadingZeros(charCode.toString(16));
}

function unicodeEscape(string) {
    return string.split("")
        .map(function(char) {
            var charCode = char.charCodeAt(0);
            return charCode > 127 ? unicodeCharEscape(charCode) : char;
        })
        .join("");
}

function jsonReplacer(key, value) {
    if (typeof value === 'number') {
        // integers (decimal) are needed to test the `X` specifier
        // TODO: find a cleaner solution
        var isSafeInteger = value === +parseInt(value) && Math.abs(value) < 1e10;
        if (!isSafeInteger) {
            // pass as double
            return {
                __type: 'special',
                kind: 'number',
                value: String(value)
            };
        }
    }
    if (value instanceof Date) {
        return {
            __type: 'special',
            kind: 'datetime',
            value: value.valueOf(),
            offset: -value.getTimezoneOffset()
        };
    }
    return value;
}

function stringifyJsonCommandLineArgument(arg) {
    var originalPrototypeDateToJSON = Date.prototype.toJSON;
    Date.prototype.toJSON = function() {
        return this;
    };
    var argJson = unicodeEscape(JSON.stringify(arg, jsonReplacer)).replace(/\\\\/g, '\\u005c');
    Date.prototype.toJSON = originalPrototypeDateToJSON;
    return argJson;
}