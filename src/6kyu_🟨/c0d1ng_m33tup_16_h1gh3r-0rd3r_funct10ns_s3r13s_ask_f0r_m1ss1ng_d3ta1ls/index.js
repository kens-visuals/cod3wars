const askForMissingDetails = (list) =>
  list
    .filter((kEl) => Object.keys(kEl).some((valEl) => kEl[valEl] === null))
    .map((valEl) => ({
      ...valEl,
      question: `Hi, could you please provide your ${Object.keys(valEl).find(
        (kEl) => valEl[kEl] === null
      )}.`,
    }));

module.exports = askForMissingDetails;
