const domainName = require("./index");

test("fixed tests", () => {
  expect(domainName("http://google.com")).toBe("google");
});

test("fixed tests", () => {
  expect(domainName("http://google.co.jp")).toBe("google");
});

test("fixed tests", () => {
  expect(domainName("www.xakep.ru")).toBe("xakep");
});

test("fixed tests", () => {
  expect(domainName("https://youtube.com")).toBe("youtube");
});
