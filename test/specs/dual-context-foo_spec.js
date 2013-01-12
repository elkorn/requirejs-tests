describe("dual-context-foo", function() {
  it("should be available in browser context", function() {
    expect(typeof Foo).toEqual('function');
  });
});