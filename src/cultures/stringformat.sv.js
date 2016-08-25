;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../sffjs')) :
   typeof define === 'function' && define.amd ? define(['../sffjs'], factory) :
   factory(global.sffjs)
}(this, function (sffjs) { 'use strict';
    sffjs.registerCulture({
        name: "sv",
        d: "yyyy-MM-dd",
        D: "'den 'd MMMM yyyy",
        M: "d MMMM",
        Y: "MMMM yyyy",
        _M: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"],
        _m: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        _D: ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"],
        _d: ["sön", "mån", "tis", "ons", "tor", "fre", "lör"],
        _r: ",",
        _t: " ",
        _ct: ".",
        _c: "#,0.00 kr"
    });
}));
