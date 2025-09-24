#Legge una lista di numeri e trova il massimo

a=eval(gets)
m=a[0]
i=0
while i<a.length
  if a[i]>m
    m=a[i]
  end
  i=i+1
end
puts m
