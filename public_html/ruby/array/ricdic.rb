#Legge una lista ORDINATA di numeri, poi un numero e trova la sua posizione nella lista mediante la ricerca dicotomica

def ricerca(a,x)
  i=0
  f=a.length-1
  while i<=f
    m=(i+f)/2
    if x<a[m]
      f=m-1
    elsif x>a[m] 
      i=m+1
    else
      return m
    end
  end
end

a=eval(gets)
x=gets.to_i
puts ricerca(a,x)
