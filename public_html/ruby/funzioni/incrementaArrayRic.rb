def inc(a,i=0)
  if i<a.length
    a[i]=a[i]+1
    return inc(a,i+1)
  else
    return a
  end
end

a=eval(gets)
puts inc(a)
