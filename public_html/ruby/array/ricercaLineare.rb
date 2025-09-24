#Legge una lista di numeri e poi un numero e determina la sua posizione nella lista mediante una ricerca lineare

a=eval(gets)
x=gets.to_i

i=0
while i<a.length && a[i]!=x
  i=i+1
end
puts i<a.length
