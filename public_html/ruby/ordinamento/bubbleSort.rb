a=eval(gets)
ultimo=a.length-1
scambio=true
while scambio
  scambio=false
  i=0
  while i<ultimo
    if a[i]>a[i+1]
      ai=a[i]
      a[i]=a[i+1]
      a[i+1]=ai
      scambio=true
    end
    i=i+1
  end
  ultimo=ultimo-1
end

puts a
