const getStrings = require("./index");

test("fixed tests", () => {
  expect(getStrings("Chicago")).toBe("c:**,h:*,i:*,a:*,g:*,o:*");
});

test("fixed tests", () => {
  expect(getStrings("Bangkok")).toBe("b:*,a:*,n:*,g:*,k:**,o:*");
});

test("fixed tests", () => {
  expect(getStrings("Las Vegas")).toBe("l:*,a:**,s:**,v:*,e:*,g:*");
});
