// Prob - 1

function newPrice(currentPrice, discount) {

if (

typeof currentPrice !== "number" ||

typeof discount !== "number" ||

discount > 100 ||

discount <= 0

) {

return "invalid";

} else {

let discountAmount = (currentPrice * discount) / 100;

let finalPrice = currentPrice - discountAmount;

return finalPrice.toFixed(3);

}

}

// const finalPrice = newPrice(2000, 17.17);

// console.log(finalPrice);

//Prob - 2

function validOtp(otp) {

if (typeof otp !== "string") {

return "invalid";

} else if (otp.length !== 8) {

return false;

} else if (!otp.startsWith("ph-")) {

return false;

} else {

return true;

}

}

// const result2 = validOtp(["abc-1235"]);

// console.log(result2);

// Prob - 3

function finalScore(obj) {

const { right, wrong, skip } = obj;

if (right + wrong + skip !== 100) {

return "invalid";

} else {

const score = right * 1 + wrong * -0.5 + skip * 0;

return Math.round(score);

}

}

// const FinalScore = finalScore({ right: 67, wrong: 23, skip: 10 });

// console.log(FinalScore);

//Prob - 4

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

// const voter = ["ha", "na", "na"];

// const result4 = gonoVote(voter);

// console.log(result4);

//Prob - 5

function analyzeText(str) {

let count = 0;

for (const ltr of str) {

if (ltr == " ") {

continue;

}

count++;

}

const words = str.split(" ");

// console.log(words);

const maxWord = words.reduce((longest, current) => {

return current.length > longest.length ? current : longest;

});

const rsl = "longwords: " + maxWord + "," + " token: " + count;

return rsl;

}

// const St = "I am a little honest person";

// const result5 = analyzeText(St);

// console.log(result5);