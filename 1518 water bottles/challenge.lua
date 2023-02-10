local number_of_water_bottles = function(numBottles, numExchange)
  local total = numBottles
  local bottles = numBottles

  while bottles >= numExchange do
    local remainder = bottles % numExchange
    bottles = math.floor(bottles/numExchange)
    total = total + bottles
    bottles = bottles + remainder
  end

  return total
end

assert(number_of_water_bottles(9, 3) == 13);
assert(number_of_water_bottles(15, 4) == 19);
assert(number_of_water_bottles(15, 8) == 17);