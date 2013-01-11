/*
  To make a module work in front and back end...
*/

(function() {
  'use strict';
  var root;

  if(typeof module === 'undefined') {
    root = this;
  } else {
    root = module.exports;
  }

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

  root.Foo = Foo;

}).call(this);