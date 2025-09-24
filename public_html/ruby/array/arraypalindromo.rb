#Legge una lista e determina se è palindroma

def pal(a,i=0,f=a.length-1)
  if i<f
    return a[i]==a[f]&&pal(a,i+1,f-1)
  else #la i ha superato la f
    return true
  end
end

a=eval(gets)
puts pal(a)
