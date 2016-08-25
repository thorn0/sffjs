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
        name: "ms",
        d: "dd/MM/yyyy",
        D: "dd MMMM yyyy",
        t: "H:mm",
        T: "H:mm:ss",
        M: "dd MMMM",
        Y: "MMMM yyyy",
        _am: "pg",
        _pm: "ptg",
        _r: ",",
        _c: "'RM'#,0.00",
        _d: ["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
        _D: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
        _m: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogos", "Sep", "Okt", "Nov", "Dis"],
        _M: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"]
    });
}));
