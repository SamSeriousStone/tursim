#Legge una lista ORDINATA di numeri, poi un numero e trova la sua posizione nella lista mediante la ricerca dicotomica usando la ricorsione

def cerca(a,x,i=0,f=a.length-1)
  if i>f
    return nil
  else
    m=(i+f)/2
    if x>a[m]
      return cerca(a,x,m+1,f)
    elsif x<a[m]
      return cerca(a,x,i,m-1)
    else #x==a[m] 
      return m
    end
  end
end

a=eval(gets)
x=gets.to_i
puts cerca(a,x)
