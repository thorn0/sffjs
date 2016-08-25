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
        name: "id",
        d: "dd/MM/yyyy",
        D: "dd MMMM yyyy",
        t: "H:mm",
        T: "H:mm:ss",
        M: "dd MMMM",
        Y: "MMMM yyyy",
        _r: ",",
        _t: ".",
        _c: "'Rp'#,0.00",
        _d: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
        _D: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
        _m: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"],
        _M: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    });
}));
