const addUsername = (list) => {
  const userName = list.map(({ firstName, lastName, age }) =>
    [
      firstName.toLowerCase(),
      lastName.toLowerCase().slice(0, 1),
      new Date().getFullYear() - age,
    ].join("")
  );

  list.map((el, i) => (el["username"] = userName[i]));

  return list;
};
