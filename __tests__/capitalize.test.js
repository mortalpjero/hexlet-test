import capitalize from "../src/capitalize.js";

test("reverse", () => {
  expect(capitalize("hello")).toEqual("Hello");
  expect(capitalize("")).toEqual("");
});
