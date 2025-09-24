def cerca(a,x)
  i=0
  f=a.length-1
  while i<=f
    m=(i+f)/2
    if x<a[m]
      f=m-1
    elsif x>a[m]
      i=m+1
    else #x==a[m]
      return m
    end
  end
end

a=eval(gets)
x=gets.to_i
puts cerca(a,x)
