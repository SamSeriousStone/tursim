#Legge una lista di numeri e determina se è strettamente ordinata

a=eval(gets)

i=0
while i<=a.length-2 && a[i]<a[i+1]
  i=i+1
end
puts i>=a.length-1
