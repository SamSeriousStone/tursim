#Legge un array di numeri e ne determina la media

def mediaArray(a)
  s=0.0
  i=0
  while i<a.length
    s=s+a[i]
    i=i+1
  end
  return s/a.length
end

a=eval(gets)
puts mediaArray(a)
