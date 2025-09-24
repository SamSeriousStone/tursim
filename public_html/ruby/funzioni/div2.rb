def div(n)
  if n%2==0 #se il numero è divisibile per 2
    return 1+div(n/2)
  end
  return 0
end

puts div(gets.to_i)

