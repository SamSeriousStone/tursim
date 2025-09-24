def mcd(a,b)
  while b!=0
    r=a%b
    a=b
    b=r
  end
  return a
end
