H=0.01
E=0.001

def valuta(f,x)
  return eval(f)
end

def d(f,x)
  fx=valuta(f,x)
  fxh=valuta(f,x+H)
  return (fxh-fx)/H
end

def bisezione(f,a,b)
  begin
    m=(b+a)/2.0
    ya=valuta(f,a)
    yb=valuta(f,b)
    ym=valuta(f,m)
    if ya>0&&ym>0||ya<0&&ym<0
      a=m
    else
      b=m
    end
  end while b-a>E
  return m
end

def secanti(f,a,b)
  while (b-a).abs>E
    ya=valuta(f,a)
    yb=valuta(f,b)
    c=(yb*a-ya*b)/(yb-ya)
    a=b
    b=c
  end
  return c
end

def tangenti(f,xi)
  while (yi=valuta(f,xi))>E
    xi=xi-yi/d(f,xi)
  end
  return xi
end

#puts valuta(gets,gets.to_f)
#puts bisezione(gets,gets.to_f,gets.to_f)
#puts secanti(gets,gets.to_f,gets.to_f)
#puts d(gets,gets.to_f)
puts tangenti(gets,gets.to_f)
