var data = require('../js/script.js');

describe("MyPowTest1", function() {
  it("Pow results inspection", function() {
    //prepare
    var result;

    //act
    result = Math.pow(2,3);

    //assert
    expect(data).toBe(result);
  });

  xit("Pow results = 9 inspection", function() {
    //prepare
    var result;

    //act
    result = 9;

    //assert
    expect(data).toEqual(result);
  });

  it("Data must not to be undefined", function() {
    //assert
    expect(data).not.toBeUndefined();
  });
});
