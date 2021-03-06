const generateBC = require("./index");

test("fixed tests", () => {
  expect(generateBC("mysite.com/pictures/holidays.html", " : ")).toBe(
    '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>'
  );
});

test("fixed tests", () => {
  expect(generateBC("www.codewars.com/users/GiacomoSorbi", " / ")).toBe(
    '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>'
  );
});

test("fixed tests", () => {
  expect(
    generateBC(
      "www.microsoft.com/important/confidential/docs/index.htm#top",
      " * "
    )
  ).toBe(
    '<a href="/">HOME</a> * <a href="/important/">IMPORTANT</a> * <a href="/important/confidential/">CONFIDENTIAL</a> * <span class="active">DOCS</span>'
  );
});

test("fixed tests", () => {
  expect(
    generateBC(
      "mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.asp",
      " > "
    )
  ).toBe(
    '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>'
  );
});

test("fixed tests", () => {
  expect(
    generateBC(
      "www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi",
      " + "
    )
  ).toBe(
    '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>'
  );
});
