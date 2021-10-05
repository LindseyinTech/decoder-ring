// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("ceasar() cipher", () => {
  it("should return false if the shift value is 0, less than -25, greater than 25, or not present", () => {
    const actual = caesar("abc", 0, true);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const actual = caesar("A Capital Letter", 2, true);
    const expected = "c ecrkvcn ngvvgt";
    expect(actual).to.equal(expected);
  });
  it("should handle shift values that go to the end of the alphabet", () => {
    const actual = caesar("xyz", 3, true);
    const expected = "abc";
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and symbols", () => {
    const actual = caesar("A Capital Letter", 2, true);
    const expected = "c ecrkvcn ngvvgt";
    expect(actual).to.equal(expected);
  });
});
