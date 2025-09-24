class Nodo
  def initialize(valore)
    @valore=valore
    #@sx=nil
    #@dx=nil
  end
  def sx=(nodo)
    @sx=nodo
  end
  def sx
    return @sx
  end
  def dx=(nodo)
    @dx=nodo
  end
  def dx
    return @dx
  end
  def valore
    return @valore
  end
  def to_s
    return @valore.to_s
  end
end

def somma(nodo)
  if nodo
    return nodo.valore+somma(nodo.sx)+somma(nodo.dx)
  else
    return 0
  end
end

def stampa(nodo)
  if nodo
    puts nodo
    stampa(nodo.sx)
    stampa(nodo.dx)
  end
end



radice=Nodo.new(2)
radice.sx=Nodo.new(3)
radice.sx.sx=Nodo.new(7)
radice.dx=Nodo.new(1)
radice.dx.sx=Nodo.new(4)
radice.dx.dx=Nodo.new(0)
stampa(radice)
puts somma(radice)
