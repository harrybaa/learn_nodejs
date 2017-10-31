var Student = require("./student.js");
var Teacher = require("./teacher.js");

var std1 = new Student("Andy", 23),
    std2 = new Student("Emmy", 24),
    std3 = new Student("Harry", 18),
    teacher = new Teacher();

std1.answer("Whats your name?");

std2.answer("Whats your name?");

std3.answer("Whats your name?");

teacher.ask("Whats your name?");