const to_nato = require("./index");

test("fixed tests", () => {
  expect(to_nato("If you can read")).toBe(
    "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta"
  );
});

test("fixed tests", () => {
  expect(to_nato("Did not see that coming")).toBe(
    "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf"
  );
});

test("fixed tests", () => {
  expect(to_nato("go for it!")).toBe(
    "Golf Oscar Foxtrot Oscar Romeo India Tango !"
  );
});
