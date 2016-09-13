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
        name: "sv-FI",
        d: "d.M.yyyy",
        D: "'den 'd MMMM yyyy",
        M: "'den 'd MMMM",
        Y: "MMMM yyyy",
        _am: "FM",
        _pm: "EM",
        _r: ",",
        _t: " ",
        _c: "#,0.00 '€'",
        _d: ["sön", "mån", "tis", "ons", "tor", "fre", "lör"],
        _D: ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"],
        _m: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        _M: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"]
    });
}));
