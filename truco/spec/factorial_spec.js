/**
  * Exemplos de testes utilizando o jasmine
  *
  */
require("../factorial.js")


describe("Factorial function", function() {

  it("returns 1 for zero", function() {
    expect(factorial(0)).toEqual(1);
  });

  it("returns 1 for one", function() {
    expect(factorial(1)).toEqual(1);
  });

  it("returns 24 for 6", function() {
    expect(factorial(4)).toEqual(24);
  });


});