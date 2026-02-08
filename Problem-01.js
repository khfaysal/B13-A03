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

const finalPrice = newPrice(2000, 17.17);
console.log(finalPrice);
