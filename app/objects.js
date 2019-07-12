if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    alterContext: function (fn, obj) {
      return fn.apply(obj);
    },

    alterObjects: function (constructor, greeting) {
      return constructor.prototype.greeting = greeting;
    },

    iterate: function (obj) {
      var newArr = [];
      for (let [key, value] of Object.entries(obj)) {
        newArr.push(`${key}: ${value}`)
      }
      return newArr;
    }
  };
});
