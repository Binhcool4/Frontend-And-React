"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var weekDays;
(function (weekDays) {
    weekDays["Monday"] = "Monday";
    weekDays["Tuesday"] = "Tuesday";
    weekDays["Wednesday"] = "Wednesday";
    weekDays["Thursday"] = "Thursday";
    weekDays["Friday"] = "Friday";
    weekDays["Saturday"] = "Saturday";
    weekDays["Sunday"] = "Sunday";
})(weekDays || (weekDays = {}));
for (let day in weekDays) {
    console.log(weekDays[day]);
}
