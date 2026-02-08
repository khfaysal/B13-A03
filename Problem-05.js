function analyzeText(str) {
  let count = 0;
  for (const ltr of str) {
    if (ltr == " ") {
      continue;
    }
    count++;
  }
  const words = str.split(" ");
  //   console.log(words);
  const maxWord = words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  });

  const rsl = "longwords: " + maxWord + "token: " + count;

  return rsl;
}

const St = "I am a little honest person";
const result = analyzeText(St);
console.log(result);
