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
        name: "fi",
        d: "d.M.yyyy",
        D: "d. MMMM'ta 'yyyy",
        t: "H:mm",
        T: "H:mm:ss",
        M: "d. MMMM'ta'",
        Y: "MMMM yyyy",
        _am: "ap.",
        _pm: "ip.",
        _r: ",",
        _t: " ",
        _c: "#,0.00 '€'",
        _d: ["su", "ma", "ti", "ke", "to", "pe", "la"],
        _D: ["sunnuntaina", "maanantaina", "tiistaina", "keskiviikkona", "torstaina", "perjantaina", "lauantaina"],
        _m: ["tammi", "helmi", "maalis", "huhti", "touko", "kesä", "heinä", "elo", "syys", "loka", "marras", "joulu"],
        _M: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"]
    });
}));
