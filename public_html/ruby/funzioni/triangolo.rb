def triangolo(n)
  if(n>1)
    triangolo(n-1)
  end
  puts "."*n
end

triangolo(gets.to_i)
