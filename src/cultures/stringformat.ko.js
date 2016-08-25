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
        name: "ko",
        d: "yyyy-MM-dd",
        D: "yyyy'년' M'월' d'일' dddd",
        t: "tt h:mm",
        T: "tt h:mm:ss",
        M: "M'월' d'일'",
        Y: "yyyy'년' M'월'",
        _am: "오전",
        _pm: "오후",
        _r: ".",
        _t: ",",
        _c: "'₩'#,0.00",
        _d: ["일", "월", "화", "수", "목", "금", "토"],
        _D: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        _m: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        _M: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
    });
}));
