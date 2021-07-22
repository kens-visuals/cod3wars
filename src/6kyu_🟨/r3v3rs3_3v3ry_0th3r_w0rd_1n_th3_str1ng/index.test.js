const reverse = require("./index");

("");
test("fixed tests", () => {
  expect(reverse("Reverse this string, please!")).toBe(
    "Reverse siht string, !esaelp"
  );
});

test("fixed tests", () => {
  expect(reverse("I really don't like reversing strings!")).toBe(
    "I yllaer don't ekil reversing !sgnirts"
  );
});
