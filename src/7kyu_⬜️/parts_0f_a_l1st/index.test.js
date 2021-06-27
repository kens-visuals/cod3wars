const partlist = require("./index");

test("fixed tests", () => {
  expect(partlist(["I", "wish", "I", "hadn't", "come"])).toEqual([
    ["I", "wish I hadn't come"],
    ["I wish", "I hadn't come"],
    ["I wish I", "hadn't come"],
    ["I wish I hadn't", "come"],
  ]);
});

test("fixed tests", () => {
  expect(partlist(["cdIw", "tzIy", "xDu", "rThG"])).toEqual([
    ["cdIw", "tzIy xDu rThG"],
    ["cdIw tzIy", "xDu rThG"],
    ["cdIw tzIy xDu", "rThG"],
  ]);
});

test("fixed tests", () => {
  expect(partlist(["vJQ", "anj", "mQDq", "sOZ"])).toEqual([
    ["vJQ", "anj mQDq sOZ"],
    ["vJQ anj", "mQDq sOZ"],
    ["vJQ anj mQDq", "sOZ"],
  ]);
});
