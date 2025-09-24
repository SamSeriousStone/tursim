def somma(a,i=0)
  if i==a.length
    return 0
  else
    return a[i]+somma(a,i+1)
  end
end

a=eval(gets)
puts somma(a)
