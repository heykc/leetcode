local check_perfect_number = function (num)
  local i = 2
  local total = 1

  while i * i < num do
    if num % i == 0 then total = total + i + num/i end
    i = i + 1;
  end

  return total == num
end

assert(check_perfect_number(6))
assert(check_perfect_number(28))
assert(check_perfect_number(496))
assert(check_perfect_number(8128))
assert(not check_perfect_number(7))
assert(not check_perfect_number(232))