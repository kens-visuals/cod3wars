// function phone(strng, num) {
//   const filtered = strng
//     .split("\n")
//     .filter((el) => el.includes(num))
//     .join("");
//   const phone =
//     filtered.match(/\D?\+\d+\-\d+\-\d+\-\d+\D*?/g) === null
//       ? ""
//       : filtered
//           .match(/\D?\+\d+\-\d+\-\d+\-\d+\D*?/g)
//           .join("")
//           .slice(2);

//   const name =
//     filtered.match(/<\w*\s*|\w*\W*\w*>/g) === null
//       ? "none"
//       : filtered
//           .match(/<\w*\s*|\w*\W*\w*>/g)
//           .join("")
//           .slice(1, -1);
//   let address = filtered
//     .split(/<\w*\s*|\w*\W*\w*>/g)
//     .join("")
//     .split(/\D?\+\d+\-\d+\-\d+\-\d+\D+?/g)
//     .filter((el) => el !== "" || el !== " ")
//     .join("")
//     .replace(/[^a-zA-Z0-9-\.]/g, " ")
//     .split(" ")
//     .filter((el) => el !== "")
//     .join(" ");

//   if (name === "none") return `Error => Not found: ${num}`;
//   if (phone.length <= 15)
//     return `Phone => ${phone}, Name => ${name}, Address => ${address}`;
//   if (phone.length >= 15) return `Error => Too many people: ${num}`;
// }

function phone(s, n) {
  const arr = s.split(/\n/g);

  return arr.reduce((acc, curr, v, arr) => {
    const exactPhoneRegEx = new RegExp(`${n}`, "g");
    const phoneRegEx = new RegExp(/.?\d?.?\d{2,3}.?\d{3}.?\d{4}/, "g");
    const nameRegEx = new RegExp(/\<\s?\D+\s?\D{0,}\s?\>/, "g");
    let retString = "";
    let phoneArr = [];
    let nameArr = [];
    let addrArr = [];

    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (item.match(nameRegEx) && item.match(exactPhoneRegEx)) {
        nameArr.push(
          item
            .match(nameRegEx)[0]
            .replace(/\<\s?(\D\s?\D{0,})\s?\>/g, "$1")
            .trim()
        );
        phoneArr.push(item.match(exactPhoneRegEx)[0]);
        item = item.replace(phoneRegEx, "");
        item = item.replace(nameRegEx, "");
        addrArr.push(item.replace(/[/$!?*;:,+]+/g, "").trim());
      }
    }

    if (!phoneArr.find((p) => phoneRegEx.test(p)))
      return `Error => Not found: ${n}`;
    if (phoneArr.length > 1) return `Error => Too many people: ${n}`;

    retString += `Phone => ${phoneArr[0]}, `;
    retString += `Name => ${nameArr[0]}, `;
    retString += `Address => ${addrArr[0]}`
      .replace(/\_/g, " ")
      .replace(/\s{2,}/g, " ");

    return retString;
  });
}

module.exports = phone;
