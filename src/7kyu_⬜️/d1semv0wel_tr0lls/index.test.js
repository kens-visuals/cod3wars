const disemvowel = require("./index");

test("fixed tests", () => {
  expect(disemvowel("This website is for losers LOL!")).toBe(
    "Ths wbst s fr lsrs LL!"
  );
});

test("fixed tests", () => {
  expect(
    disemvowel(
      "No offense but,\nYour writing is among the worst I've ever read"
    )
  ).toBe("N ffns bt,\nYr wrtng s mng th wrst 'v vr rd");
});

test("fixed tests", () => {
  expect(disemvowel("What are you, a communist?")).toBe("Wht r y,  cmmnst?");
});
