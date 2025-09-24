def div(n)
  if n%2==0 #se il numero è divisibile per 2
    d=1+div(n/2)
    puts d
    return d
  end
  return 0
end

puts div(gets.to_i)

