const spinWords = require("./index");

test("fixed tests", () => {
  expect(spinWords("Welcome")).toBe("emocleW");
});

test("fixed tests", () => {
  expect(spinWords("Hey fellow warriors")).toBe("Hey wollef sroirraw");
});

test("fixed tests", () => {
  expect(spinWords("This is a test")).toBe("This is a test");
});

test("fixed tests", () => {
  expect(spinWords("This is another test")).toBe("This is rehtona test");
});

test("fixed tests", () => {
  expect(spinWords("You are almost to the last test")).toBe(
    "You are tsomla to the last test"
  );
});

test("fixed tests", () => {
  expect(spinWords("Just kidding there is still one more")).toBe(
    "Just gniddik ereht is llits one more"
  );
});

test("fixed tests", () => {
  expect(spinWords("Seriously this is the last one")).toBe(
    "ylsuoireS this is the last one"
  );
});
