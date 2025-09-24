#minimo comune multiplo
#ALGORITMO ERRATO!!! Se entrambi i numeri sono uguali a 0 restituisce 1 mentre se solo uno dei due è uguale a 0 non termina

def mcm(a,b)
  m=1
  d=2
  while d<=a||d<=b
    if a%d==0||b%d==0
      m=m*d
      if a%d==0
        a=a/d
      end
      if b%d==0
        b=b/d
      end
    else
      d=d+1
    end
  end
  return m
end