const check_perfect_number = function(num) {
  let total = 1;

  for (let i = 2; i * i < num; i++) {
      if (num % i === 0) total += i + num/i;
  }

  return total === num;
};