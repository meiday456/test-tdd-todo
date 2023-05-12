describe("TEST", () => {
  it("true is true", () => {
    expect(true).equal(true);
    expect(true).to.equal(true);
    assert.equal(4, 4, "EQUAL!!!");
    assert.equal(4, 4);
    assert.equal(4, 5, "NOT EQUAL!!!");
  });

  context("assert test", () => {
    it("isObject", () => {
      const employee = {name: "Lakshay", age: 34};

      assert.isObject(employee, "value is object");
    });
  });
});
