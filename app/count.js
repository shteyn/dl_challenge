if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count: function (start, end) {
      var intervalCounter;
      function count() {
        console.log(start++);
        if (start <= end) {
          intervalCounter = setTimeout(count, 100);
        }
      }
      count();
      return {
        cancel: function () {
          intervalCounter && clearTimeout(intervalCounter);
        }
      };
    }

  };
});