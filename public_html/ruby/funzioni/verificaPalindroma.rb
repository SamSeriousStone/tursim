#verifica se l'array è palindromo (true o false) senza usare reverse
def palindroma(a)
  i=0
  f=a.length-1
  while a[i]==a[f]&&i<f
    i=i+1
    f=f-1
  end
  return i>=f
end

a=eval(gets)
puts palindroma(a)
