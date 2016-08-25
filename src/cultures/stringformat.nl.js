// This culture information has been generated using the Mono class library
// licensed under the terms of the MIT X11 license.
// See: http://www.mono-project.com/FAQ:_Licensing

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../sffjs')) :
   typeof define === 'function' && define.amd ? define(['../sffjs'], factory) :
   factory(global.sffjs)
}(this, function (sffjs) { 'use strict';
    sffjs.registerCulture({
        name: "nl",
        d: "d-M-yyyy",
        D: "dddd d MMMM yyyy",
        t: "H:mm",
        T: "H:mm:ss",
        M: "dd MMMM",
        Y: "MMMM yyyy",
        _am: "a.m.",
        _pm: "p.m.",
        _r: ",",
        _t: ".",
        _c: "#,0.00 '€'",
        _d: ["zo", "ma", "di", "wo", "do", "vr", "za"],
        _D: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
        _m: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        _M: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
    });
}));
