const check_perfect_number = function(num) {
  let total = 1;

  for (let i = 2; i * i < num; i++) {
      if (num % i === 0) total += i + num/i;
  }

  return total === num;
};

console.assert(check_perfect_number(6));
console.assert(check_perfect_number(28));
console.assert(check_perfect_number(496));
console.assert(check_perfect_number(8128));
console.assert(!check_perfect_number(7));
console.assert(!check_perfect_number(232));