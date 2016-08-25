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
        name: "ja",
        d: "yyyy/MM/dd",
        D: "yyyy'年'M'月'd'日'",
        t: "H:mm",
        T: "H:mm:ss",
        M: "M'月'd'日'",
        Y: "yyyy'年'M'月'",
        _am: "午前",
        _pm: "午後",
        _r: ".",
        _t: ",",
        _c: "'￥'#,0.00",
        _d: ["日", "月", "火", "水", "木", "金", "土"],
        _D: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
        _m: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        _M: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
    });
}));
