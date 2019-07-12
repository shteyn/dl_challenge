if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    listFiles: function (data, dirName) {
    },

    permute: function (arr) {
      var length = arr.length,
        result = [arr.slice()],
        c = new Array(length).fill(0),
        i = 1;
      while (i < length) {
        if (c[i] < i) {
          k = i % 2 && c[i];
          p = arr[i];
          arr[i] = arr[k];
          arr[k] = p;
          ++c[i];
          i = 1;
          result.push(arr.slice());
        } else {
          c[i] = 0;
          ++i;
        }
      }
      return result;
    }
  };
});
