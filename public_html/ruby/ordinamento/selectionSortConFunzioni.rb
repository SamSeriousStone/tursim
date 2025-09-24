def getImin(a,inizio)
  imin=inizio
  i=inizio
  while i<a.length
    if a[i]<a[imin]
      imin=i
    end
    i=i+1
  end
  return imin
end

def ordina(a)
  i=0
  while i<a.length
    imin=getImin(a,i)
    min=a[imin]
    a[imin]=a[i]
    a[i]=min
    i=i+1
  end
  return a
end

a=eval(gets)
puts ordina(a).to_s
