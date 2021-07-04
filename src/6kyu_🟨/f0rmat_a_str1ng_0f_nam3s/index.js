const list = (names) => {
  const nameArr = names.map((el) => el.name);

  if (nameArr.length >= 3)
    return `${nameArr.slice(0, -2).join(", ")}, ${nameArr
      .slice(-2)
      .join(" & ")}`;
  if (nameArr.length === 2) return `${nameArr.slice(-2).join(" & ")}`;
  else return nameArr.join("");
};

module.exports = list;
