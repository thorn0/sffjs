;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../sffjs')) :
   typeof define === 'function' && define.amd ? define(['../sffjs'], factory) :
   factory(global.sffjs)
}(this, function (sffjs) { 'use strict';
    sffjs.registerCulture({
        name: "uk",
        d: "dd.MM.yyyy",
        D: "d MMMM yyyy' р.'",
        t: "H:mm",
        T: "H:mm:ss",
        M: "d MMMM",
        Y: "MMMM yyyy' р.'",
        _am: "",
        _pm: "",
        _r: ",",
        _t: " ",
        _c: "#,0.00 '₴'",
        _d: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        _D: ["неділя", "понеділок", "вівторок", "середа", "четвер", "пʼятниця", "субота"],
        _m: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
        _M: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
        _Mg: ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня", ""]
    });
}));
