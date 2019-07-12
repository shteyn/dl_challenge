if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    indexOf: function (arr, item) {
      return arr.indexOf(item);
    },

    sum: function (arr) {
      return arr.reduce((a, b) => a + b, 0);
    },

    remove: function (arr, item) {
      var res = arr.filter(function (value) {
        return value !== item
      });
      return res;
    },

    removeWithoutCopy: function (arr, item) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          arr.splice(i, 1);
          i -= 1;
        }
      }
      return arr;
    },

    append: function (arr, item) {
      return arr.concat(item);
    },

    truncate: function (arr) {
      return arr.slice(0, -1);
    },

    prepend: function (arr, item) {
      return [item].concat(arr);
    },

    curtail: function (arr) {
      return arr.slice(1);
    },

    concat: function (arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert: function (arr, item, index) {
      var lengthOfArr = arr.length;
      for (var i = 0; i < arr.length; i++) {
        if (i === index) {
          arr.splice(i, 0, item);
          lengthOfArr += lengthOfArr;
        }
      }
      return arr;
    },

    count: function (arr, item) {
      var count = arr.reduce(function (accumulator, value) {
        return accumulator + (value === item);
      }, 0);
      return count;
    },

    duplicates: function (arr) {
      var duplicates = arr.filter(function (itm, i) {
        return arr.lastIndexOf(itm) == i && arr.indexOf(itm) != i;
      });
      return duplicates.sort();
    },

    square: function (arr) {
      return arr.map(item => {
        return Math.pow(item, 2);
      })
    },

    findAllOccurrences: function (arr, target) {
      let targetItem = [];

      arr.forEach(function (elem, index, array) {
        if (elem === target) {
          targetItem.push(index);
        }
        return targetItem
      })
      return targetItem
    }
  };
});
