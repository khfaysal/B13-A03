function gonoVote(array) {
  let haCount = 0;
  let naCount = 0;

  for (const voter of array) {
    if (voter == "ha" || voter == "na") {
      if (voter === "ha") {
        haCount++;
      } else {
        naCount++;
      }
    } else {
      return "invalid";
    }
  }
  if (haCount > naCount) {
    return true;
  } else if (haCount === naCount) {
    return "equal";
  } else {
    return false;
  }
}
const voter = ["ha", "na", "na"];
const result = gonoVote(voter);
console.log(result);
