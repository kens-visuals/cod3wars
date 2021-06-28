const printerError = (s) => `${s.replace(/[a-m]/g, "").length}/${s.length}`;

module.exports = printerError;
