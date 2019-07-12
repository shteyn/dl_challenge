if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    argsAsArray: function (fn, arr) {
      return fn.apply(null, arr);
    },

    speak: function (fn, obj) {
      return fn.call(obj);
    },

    functionFunction: function (str) {
      return function (str1) {
        return str + ", " + str1;
      }
    },

    makeClosures: function (arr, fn) {
      var newArr = [];
      for (var i = 0; i < arr.length; i++) {
        newArr.push(function (i) {
          return function () {
            return fn(arr[i]);
          };
        }(i));
      }
      return newArr;
    },

    partial: function (fn, str1, str2) {
      return function (str3) {
        return fn(str1, str2, str3);
      }
    },

    useArguments: function () {
      var result = 0;
      for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
      }
      return result;
    },

    callIt: function (fn) {
      var newArrey = [];
      for (var i = 1; i < arguments.length; i++) {
        newArrey.push(arguments[i]);
      }
      fn.apply(this, newArrey);
    },

    partialUsingArguments: function (fn) {
      var argv = Array.prototype.slice.call(arguments, 1, arguments.length);
      return function () {
        var more_argv = argv.concat(Array.prototype.slice.call(arguments));
        return fn.apply(null, more_argv);
      }
    },

    curryIt: function (fn) {
      return function (a) {
        return function (b) {
          return function (c) {
            return fn.call(null, a, b, c);
          }
        }
      }
    }
  };
});
