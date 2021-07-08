const travel = (r, zipcode) => {
  if (zipcode.length !== 8) return `${zipcode}:/`;
  const addresses = r.split(",").filter((el) => el.includes(zipcode));
  const address = addresses
    .map((el) => el.match(/[^\d]/g).join("").slice(1, -4))
    .join(",");
  const addressNumber = addresses
    .map((el) => el.match(/^\d+/g).join(""))
    .join(",");

  return `${zipcode}:${address}/${addressNumber}`;
};

module.exports = travel;
