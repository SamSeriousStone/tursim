class Nodo
  def valore=(valore)
    @valore=valore
  end
  def valore
    return @valore
  end
  def sx
    return @sx
  end
  def dx
    return @dx
  end
  def sx=(nodo)
    return @sx=nodo
  end
  def dx=(nodo)
    return @dx=nodo
  end
  def to_s
    return @valore.to_s
  end
  def stampa
    puts valore
    if sx
      sx.stampa
    end
    if dx
      dx.stampa
    end
  end
  def calc
    if valore=='+'
      return sx.calc+dx.calc
    elsif valore=='_' 
      return sx.calc-dx.calc
    elsif valore=='*' 
      return sx.calc*dx.calc
    elsif valore=='/' 
      return sx.calc/dx.calc
    else
      return valore.to_i
    end
  end
end

def split(s)
  np=0
  i=0
  while !(s[i]==","&&np==0)
    if s[i]=="("
      np=np+1
    elsif s[i]==")"
      np=np-1
    end
    i=i+1
  end
  return [s.slice(0..i-1),s.slice(i+1..s.length-1)]
end

def parse(s,nodo)
  op=s[0]
  if op=='+' || op=='_' || op=='*' || op=='/'
    nodo.valore=op
    s=s.slice(2..s.length-2)
    operandi=split(s)
    parse(operandi[0],nodo.sx=Nodo.new)
    parse(operandi[1],nodo.dx=Nodo.new)
  else
    nodo.valore=s
  end
end

root=Nodo.new
parse(gets.chomp,root)
puts root.calc
