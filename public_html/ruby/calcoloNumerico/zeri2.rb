H=0.01
E=0.001

def f(x)
  return (x-3)*(x+2)
end

def d(x)
  return (f(x+h)-f(x))/H
end

def bisezione(a,b)
  begin
    m=(b+a)/2.0
    ya=f(a)
    yb=f(b)
    ym=f(m)
    if ya>0&&ym>0||ya<0&&ym<0
      a=m
    else
      b=m
    end
  end while b-a>E
  return m
end

def secanti(a,b)
  while (b-a).abs>E
    ya=f(a)
    yb=f(b)
    c=(yb*a-ya*b)/(yb-ya)
    a=b
    b=c
  end
  return c
end

def tangenti(xi)
  while (yi=f(xi))>E
    xi=xi-yi/d(xi)
  end
  return xi
end
