const words = 'always', 'look', 'on', 'the', 'bright', 'side', 'of', 'life';

const maxWord = words.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
});

console.log(maxWord);


const maxWord = St.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
});