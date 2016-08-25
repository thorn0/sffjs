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
        name: "fo",
        d: "dd-MM-yyyy",
        D: "d. MMMM yyyy",
        M: "d. MMMM",
        Y: "MMMM yyyy",
        _am: "f.p.",
        _pm: "s.p.",
        _r: ",",
        _t: ".",
        _c: "#,0.00 'kr'",
        _d: ["sun", "mán", "týs", "mik", "hós", "frí", "ley"],
        _D: ["sunnudagur", "mánadagur", "týsdagur", "mikudagur", "hósdagur", "fríggjadagur", "leygardagur"],
        _m: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
        _M: ["januar", "februar", "mars", "apríl", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"]
    });
}));
