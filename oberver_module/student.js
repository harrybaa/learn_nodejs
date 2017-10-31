var Observer = require("./observer.js");

var Student = function(name, age) {
  this.name = name || "noOne";
  this.age = age || 0;

  this.greating = function() {
    console.log("Hello, my name is " + this.name);
  }

  this.sayAge = function() {
    console.log("My name is " + this.age);
  }
}

Student.prototype = {
  answer: function(type) {
    Observer.regist(type, this.greating);
  },
  sleep: function(type, fn) {
    Observer.remove(type, this.greating);
  }
}

module.exports = Student;