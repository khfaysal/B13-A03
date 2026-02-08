function newPrice(curPrice, discount) {
  if (
    typeof curPrice !== "number" ||
    typeof discount !== "number" ||
    discount > 100 ||
    discount <= 0
  ) {
    return "invalid input.";
  } else {
    let discountAmount = (curPrice * discount) / 100;
    let finalPrice = curPrice - discountAmount;
    return finalPrice.toFixed(3);
  }
}

const finalPrice = newPrice(1500, 20);
console.log(finalPrice);
