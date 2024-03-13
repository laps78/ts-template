"use strict";
var book = {
    name: "book name",
    isbn: "2132139823092"
};
var max;
max = [1, 2];
var Season;
(function (Season) {
    Season[Season["Winter"] = 0] = "Winter";
    Season[Season["Spring"] = 1] = "Spring";
    Season[Season["Summer"] = 2] = "Summer";
    Season[Season["Autumn"] = 3] = "Autumn";
})(Season || (Season = {}));
;
var current = Season.Summer;
var person = { name: "tom", age: 23 };
var simpleBook = /** @class */ (function () {
    function simpleBook() {
    }
    return simpleBook;
}());
var ComicsBook = /** @class */ (function () {
    function ComicsBook() {
    }
    return ComicsBook;
}());
var primaryColor = "green";
var secondaryColor = 0x8e8e8e;
var data = "Ivan";
var strLength = data.toString().length;
var simpleBuilder = function (name, surname) {
    return "Mr " + name + " " + surname;
};
var fullName = simpleBuilder("Bob", "Simpson");
console.log(fullName);
