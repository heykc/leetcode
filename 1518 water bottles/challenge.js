const numWaterBottles = function(numBottles, numExchange) {
  let total = numBottles;
  let bottles = numBottles;

  while (bottles >= numExchange) {
    const remainder = bottles % numExchange;
    bottles = ~~(bottles/numExchange);
    total += bottles;
    bottles += remainder;
  }

  return total;
};

console.assert(numWaterBottles(9, 3) === 13);
console.assert(numWaterBottles(15, 4) === 19);
console.assert(numWaterBottles(15, 8) === 17);