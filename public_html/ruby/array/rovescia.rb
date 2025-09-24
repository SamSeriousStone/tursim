a=eval(gets)
i=0
f=a.length-1
while i<=f/2
  t=a[i]
  a[i]=a[f]
  a[f]=t
  i=i+1
  f=f-1
end
puts a
