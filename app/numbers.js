if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    valueAtBit: function (num, bit) {
      var divideNumBy = Math.pow(2, bit - 1);
      var modulo2By = Math.floor(num / divideNumBy);
      var bit = modulo2By % 2;

      return bit;
    },

    base10: function (str) {
      return parseInt(str, 2);
    },

    convertToBinary: function (num) {
      return ("00000000" + num.toString(2)).substr(-8)
    },

    multiply: function (a, b) {
      var atens = Math.pow(10, String(a).length - String(a).indexOf('.') - 1),
        btens = Math.pow(10, String(b).length - String(b).indexOf('.') - 1);
      return (a * atens) * (b * btens) / (atens * btens);
    }
  };
});

