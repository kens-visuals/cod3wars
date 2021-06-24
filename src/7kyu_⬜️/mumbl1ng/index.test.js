const accum = require("./index");

test("fixed tests", () => {
  expect(accum("ZpglnRxqenU")).toBe(
    "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
  );
});

test("fixed tests", () => {
  expect(accum("NyffsGeyylB")).toBe(
    "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
  );
});

test("fixed tests", () => {
  expect(accum("MjtkuBovqrU")).toBe(
    "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
  );
});

test("fixed tests", () => {
  expect(accum("EvidjUnokmM")).toBe(
    "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
  );
});

test("fixed tests", () => {
  expect(accum("HbideVbxncC")).toBe(
    "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
  );
});
