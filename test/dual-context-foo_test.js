var Foo = require('../lib/dual-context-foo.js').Foo;

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['Foo'] = {
  setUp: function(done) {
    'use strict';
    // setup here
    done();
  },
  'available in backend context': function(test) {
    'use strict';
    test.expect(1);
    // tests here
    test.equal(typeof Foo, 'function', 'Should be available as a function.');
    test.done();
  },
  'members available in backend context' : function(test) {
    'use strict';
    test.expect(1);
    var foo = new Foo(2, 3);
    test.equal(typeof foo.barBaz, 'function', 'barBaz should be available as a function.');
    test.done();
  }
};
