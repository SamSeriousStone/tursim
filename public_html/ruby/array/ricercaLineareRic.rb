#Legge una lista di numeri e poi un numero e determina la sua posizione nella lista mediante una ricerca lineare mediante una funzione ricorsiva

def ric(x,a)
  if a==[]
    return false
  else
    return x==a[0]||ric(x,a[1,a.length-1])
  end
end

x=gets.to_i
a=eval(gets)
puts ric(x,a)
