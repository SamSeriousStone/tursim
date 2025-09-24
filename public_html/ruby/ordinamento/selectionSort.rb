a=eval(gets)

j=0
while j<a.length
  imin=j
  i=j+1
  while i<a.length
    if a[i]<a[imin]
      imin=i
    end
    i=i+1
  end
  min=a[imin]
  a[imin]=a[j]
  a[j]=min
  j=j+1
end

puts a
