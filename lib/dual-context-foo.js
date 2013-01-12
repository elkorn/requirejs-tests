/*
  CommonJS module available in front as well as back end.
*/

(function(exports) {
  'use strict';
  var Foo = function(bar, baz) {
      this.bar = bar;
      this.baz = baz;
      // this.prototype = Foo.prototype;
    };

  Foo.prototype = {
    barBaz: function() {
      return ['bar: ', this.bar, ', baz: ', this.baz].toString();
    }
  };

  exports.Foo = Foo;
})((typeof exports !== 'undefined' && exports || this));