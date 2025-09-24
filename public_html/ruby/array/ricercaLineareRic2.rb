def cerca(a,x,i=0)
  if i<a.length
    return a[i]==x||cerca(a,x,i+1)
  end
  return false
end

a=eval(gets)
x=gets.to_i
puts cerca(a,x)
