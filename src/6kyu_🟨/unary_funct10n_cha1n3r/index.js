function chained(functions) {
  return function inFunc(f) {
    for (let i = 0; i < functions.length; i++) {
      f = functions[i](f);
    }
    return f;
  };
}

module.exports = chained;
