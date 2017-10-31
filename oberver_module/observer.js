var Observer = (function() {
  var _msg = {};

  return {
    regist: function(type, fn) {
      if (_msg[type]) {
        _msg[type].push(fn);
      } else {
        _msg[type] = [fn];
      }
    },

    remove: function(type, fn) {
      if (_msg[type]) {
        for (let i = 0; i < _msg[type].length; i++) {
          if(_msg[type][i] === fn) {
            _msg[type].splice(i, 1);
          }
        }
      }
    },

    fire: function(type) {
      if (_msg[type]) {
        for (let i = 0; i < _msg[type].length; i++) {
          _msg[type][i] && _msg[type][i]();
        }
      }
    }
  }
})();

module.exports = Observer;