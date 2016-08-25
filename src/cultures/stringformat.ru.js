;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../sffjs')) :
   typeof define === 'function' && define.amd ? define(['../sffjs'], factory) :
   factory(global.sffjs)
}(this, function (sffjs) { 'use strict';
    sffjs.registerCulture({
        name: "ru",
        d: "dd.MM.yyyy",
        D: "d MMMM yyyy 'г.'",
        t: "H:mm",
        T: "H:mm:ss",
        Y: "MMMM yyyy",
        _am: "",
        _pm: "",
        _r: ",",
        _t: " ",
        _c: "#,0.00 'руб.'",
        _d: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        _D: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        _m: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
        _M: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        _Mg: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря", ""]
    });
}));
