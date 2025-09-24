#massimo comun divisore
#ERRATO!!! sbaglia se uno dei due numeri è zero
def mcd(a,b)
  m=1
  d=2
  while d<=a&&d<=b
    if a%d==0&&b%d==0
      m=m*d
      a=a/d
      b=b/d
    else
      d=d+1
    end
  end
  return m
end