const dup = require("./index");

test("fixed tests", () => {
  expect(
    dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"])
  ).toEqual(["codewars", "picaniny", "hubububo"]);
});

test("fixed tests", () => {
  expect(dup(["abracadabra", "allottee", "assessee"])).toEqual([
    "abracadabra",
    "alote",
    "asese",
  ]);
});

test("fixed tests", () => {
  expect(dup(["kelless", "keenness"])).toEqual(["keles", "kenes"]);
});

test("fixed tests", () => {
  expect(
    dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"])
  ).toEqual(["Wolomolo", "flodoromonlighters", "chuchchi"]);
});

test("fixed tests", () => {
  expect(dup(["adanac", "soonness", "toolless", "ppellee"])).toEqual([
    "adanac",
    "sones",
    "toles",
    "pele",
  ]);
});

test("fixed tests", () => {
  expect(dup(["callalloo", "feelless", "heelless"])).toEqual([
    "calalo",
    "feles",
    "heles",
  ]);
});

test("fixed tests", () => {
  expect(dup(["putteellinen", "keenness"])).toEqual(["putelinen", "kenes"]);
});

test("fixed tests", () => {
  expect(dup(["kelless", "voorraaddoosspullen", "achcha"])).toEqual([
    "keles",
    "voradospulen",
    "achcha",
  ]);
});
