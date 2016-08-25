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
        name: "bs",
        d: "d.M.yyyy",
        D: "d. MMMM yyyy",
        t: "H:mm",
        T: "H:mm:ss",
        M: "d. MMMM",
        Y: "MMMM yyyy",
        _am: "pre podne",
        _pm: "popodne",
        _r: ",",
        _t: ".",
        _c: "#,0.00 ''",
        _d: ["ned", "pon", "uto", "sri", "čet", "pet", "sub"],
        _D: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"],
        _m: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"],
        _M: ["januar", "februar", "mart", "april", "maj", "juni", "juli", "avgust", "septembar", "oktobar", "novembar", "decembar"]
    });
}));
