#Legge una lista di numeri e poi un numero e determina la sua posizione nella lista mediante una ricerca lineare (algoritmo 2)

def presente(a,x)
  i=0
  while i<a.length
    if x==a[i]
      return true
    end
    i=i+1
  end
  return false
end

a=eval(gets)
x=gets.to_i
puts presente(a,x)
