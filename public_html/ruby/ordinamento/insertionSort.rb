a=eval(gets)
j=1
while j<a.length
  aj=a[j]
  i=j
  while i>0 && a[i-1]>aj
    a[i]=a[i-1]
    i=i-1
  end
  a[i]=aj
  j=j+1
end
puts a
