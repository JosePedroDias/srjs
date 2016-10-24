intsam = (function() {
  'use strict';

  var lookup = [
    'abcdefghijklmnopqrstuvwxyz', // + 26
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ', // + 26 = 52
    '0123456789',                 // + 10 = 62
    ',.;:+-*=~|/!@#$%&()[]{}?_', // + 26 = 88
    '€^´`áàéèíìóòúùÁÀÉÈÍÌÓÒÚÙçÇ'  // + 26 = 114
  ].join('').split('');

  return {

    encode: function(arr) {
      return arr.map(function(n) {
        return lookup[n];
      }).join('');
    },

    decode: function(s) {
      return s.split('').map(function(c) {
        return lookup.indexOf(c);
      });
    }

  }

})();
