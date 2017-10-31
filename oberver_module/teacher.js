var Observer = require("./observer.js");

var Teacher = function() {
  this.name = "Mr. Liu";
}

Teacher.prototype = {
  ask: function(type) {
    console.log("Teacher asks: " + type);
    Observer.fire(type);
  }
}

module.exports = Teacher;