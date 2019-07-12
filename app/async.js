if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['jquery'], function ($) {
  return {
    async: function (value) {
      return Promise.resolve(value);
    },

    manipulateRemoteData: function (url) {
      return fetch(url)
        .then(response => response.json())
        .then(json => {
          var arrayOfNames = [];
          json.people.forEach(each => {
            arrayOfNames.push(each.name);
          });
          return arrayOfNames.sort();
        })
    }
  };
});
