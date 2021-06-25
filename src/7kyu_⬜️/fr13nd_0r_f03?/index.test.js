const friend = require("./index");

test("fixed tests", () => {
  expect(friend(["Ryan", "Kieran", "Mark"])).toEqual(["Ryan", "Mark"]);
});

test("fixed tests", () => {
  expect(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])).toEqual(["Ryan"]);
});

test("fixed tests", () => {
  expect(
    friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
  ).toEqual(["Jimm", "Cari", "aret"]);
});

test("fixed tests", () => {
  expect(friend(["Love", "Your", "Face", "1"])).toEqual([
    "Love",
    "Your",
    "Face",
  ]);
});
