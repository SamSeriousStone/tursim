num=gets.to_i
den=gets.to_i
d=2
while d<=num && d<=den
  if num%d==0 && den%d==0
    num=num/d
    den=den/d
  else
    d=d+1
  end
end
puts num
puts den
