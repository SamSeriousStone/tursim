def albero(a)
  i=1
  while i<=a
    puts " "*(a-i)+"* "*i
    i=i+1
  end
  puts " "*(a-1)+"|"
end

albero(gets.to_i)
