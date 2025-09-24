N=256

def f(x)
  return x*x
end

def integrale(x,b)
  h=(b-x)/N
  s=0
  while x<b
    s=s+f(x)*h
    x=x+h
  end
  return s
end

puts integrale(gets.to_f,gets.to_f)
