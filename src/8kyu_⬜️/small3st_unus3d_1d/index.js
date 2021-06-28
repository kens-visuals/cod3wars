const nextId = (ids, id = 0) => {
  while (ids.includes(id)) id++;
  return id;
};

module.exports = nextId;
