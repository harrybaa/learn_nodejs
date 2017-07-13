"use strict";
exports.__esModule = true;
var printLable = function (stick) {
    console.log(stick.lable);
};
var stickOne = {
    "lable": "This is my first sticker."
};
printLable(stickOne);
var mysearch = function (orig, target) {
    return orig.search(target) !== -1;
};
console.log(mysearch("wonderful", "won"));
var carObject = (function () {
    function carObject(name, maker, year) {
        if (name === void 0) { name = "noName"; }
        if (maker === void 0) { maker = "BMW"; }
        if (year === void 0) { year = 2000; }
        this.name = name;
        this.maker = maker;
        this.year = year;
    }
    carObject.prototype.print = function () {
        console.log("This car is: $this.name , it made by $this.maker in $this.year.");
    };
    return carObject;
}());
exports.carObject = carObject;
var myCar = new carObject("Tiger", "Benz", 2008);
myCar.print();
