const generateShape = (integer, result = "") => {
  for (let i = 1; i <= integer * integer; i++)
    i % integer === 0 ? (result += "+\n") : (result += "+");

  return result.slice(0, -1);
};

module.exports = generateShape;
