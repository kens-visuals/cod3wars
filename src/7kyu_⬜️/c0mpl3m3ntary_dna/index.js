const DNAStrand = (dna) =>
  dna
    .split("")
    .map((i) => (i === "A" ? i.replace("A", "T") : i.replace("T", "A")))
    .map((i) => (i === "G" ? i.replace("G", "C") : i.replace("C", "G")))
    .join("");

module.exports = DNAStrand;
