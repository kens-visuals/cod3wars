const highlight = require("./index");

test("fixed tests", () => {
  expect(highlight("F3RF5LF7")).toBe(
    '<span style="color: pink">F</span><span style="color: orange">3</span><span style="color: green">R</span><span style="color: pink">F</span><span style="color: orange">5</span><span style="color: red">L</span><span style="color: pink">F</span><span style="color: orange">7</span>'
  );
});

test("fixed tests", () => {
  expect(highlight("FFFR345F2LL")).toBe(
    '<span style="color: pink">FFF</span><span style="color: green">R</span><span style="color: orange">345</span><span style="color: pink">F</span><span style="color: orange">2</span><span style="color: red">LL</span>'
  );
});
