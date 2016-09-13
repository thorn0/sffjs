;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../sffjs')) :
   typeof define === 'function' && define.amd ? define(['../sffjs'], factory) :
   factory(global.sffjs)
}(this, function (sffjs) { 'use strict';
    sffjs.registerCulture({
        name: "en-US",
        d: "M/d/yyyy",
        D: "dddd, MMMM d, yyyy",
        t: "h:mm tt",
        T: "h:mm:ss tt",
        M: "MMMM d",
        Y: "MMMM, yyyy",
        _c: "$#,0.00"
    });
}));
