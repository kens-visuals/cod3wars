const ignoreArr = [
  "the",
  "of",
  "in",
  "from",
  "by",
  "with",
  "and",
  "or",
  "for",
  "to",
  "at",
  "a",
];

function produceSpan(content) {
  return `<span class="active">${formatTitle(content)}</span>`;
}

function formatTitle(content) {
  if (content.length > 30) {
    return content
      .split("-")
      .map((c) =>
        ignoreArr.indexOf(c) === -1 ? c.charAt(0).toUpperCase() : false
      )
      .filter((v) => !!v)
      .join("");
  }
  return content.replace(/\-/g, " ").toUpperCase();
}

function produceAnchor(filePath, content) {
  return `<a href="${filePath}">${formatTitle(content)}</a>`;
}

function generateBC(url, separator) {
  let returnString = "";
  separator = ` ${`${separator}`.trim()} `;
  const splitArr = url
    .replace(/\D{0,6}:/, "")
    .split("/")
    .filter((u) => u && u !== "" && u.indexOf("index.") < 0)
    .map((url) => {
      if (url.match(/[?#]/)) {
        return url.split(/[#?]/g)[0];
      }
      return url;
    });

  return splitArr.reduce((acc, cur, index, arr) => {
    const isLast = index === arr.length - 1;

    if (index == 0) {
      if (isLast) {
        acc += produceSpan("HOME");
        return acc;
      }

      acc += produceAnchor("/", "HOME") + `${separator}`;
      return acc;
    }

    if (isLast) {
      acc += produceSpan(cur.replace(/\..+/g, ""));
      return acc;
    }

    const url = arr.slice(1, index + 1).join("/");

    acc += produceAnchor(`/${url}/`, cur) + `${separator}`;

    return acc;
  }, "");
}

module.exports = generateBC;
