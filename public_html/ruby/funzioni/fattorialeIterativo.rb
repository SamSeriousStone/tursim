def fatt(n)
  f=1
  while n>0
    f=f*n
    n=n-1
  end
  return f
end

puts fatt(gets.to_i)
