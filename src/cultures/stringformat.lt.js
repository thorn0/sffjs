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
        name: "lt",
        d: "yyyy.MM.dd",
        D: "yyyy 'm.' MMMM d 'd.'",
        t: "HH:mm",
        T: "HH:mm:ss",
        M: "MMMM d 'd.'",
        Y: "yyyy 'm.' MMMM",
        _am: "pr.p.",
        _pm: "pop.",
        _r: ".",
        _t: ",",
        _c: "#,0.00 'Lt'",
        _d: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Št"],
        _D: ["sekmadienis", "pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis"],
        _m: ["Saus.", "Vas.", "Kov.", "Bal.", "Geg.", "Bir.", "Liep.", "Rugp.", "Rugs.", "Spal.", "Lapkr.", "Gruod."],
        _M: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"]
    });
}));
