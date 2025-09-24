def fattori(n)
  a=[]
  d=2
  while n>1
    if n%d==0
      a.push(d)
      n=n/d
    else
      d=d+1
    end
  end
  return a
end