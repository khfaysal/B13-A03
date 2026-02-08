function finalScore(obj) {
  const { right, wrong, skip } = obj;

  if (right + wrong + skip !== 100) {
    return "invalid";
  } else {
    const score = right * 1 + wrong * -0.5 + skip * 0;
    return Math.round(score);
  }
}

const FinalScore = finalScore({ right: 67, wrong: 23, skip: 10 });

console.log(FinalScore);
