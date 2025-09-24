class Nodo
  def initialize(valore)
    @valore=valore
    #@sx=nil
    #@dx=nil
  end
  def sx
    return @sx
  end
  def dx
    return @dx
  end
  def sx=(nodo)
    @sx=nodo
  end
  def dx=(nodo)
    @dx=nodo
  end
  def to_s
    return @valore.to_s
  end
  def valore
    return @valore
  end
  def valore=(valore)
    @valore=valore
  end
  def foglia?
    return sx==nil&&dx==nil
  end
end

def max(a,b)
  if a>b
    return a
  else
    return b
  end
end

class Albero

  def radice=(nodo)
    @radice=nodo
  end

  def radice
    return @radice
  end

  def profondità(nodo=@radice)
    if nodo
      return 1+max(profondità(nodo.sx),profondità(nodo.dx))
    end
    return 0
  end

  def dimensione(nodo=@radice)
    if nodo
      return 1+dimensione(nodo.sx)+dimensione(nodo.dx)
    end
    return 0
  end

  def to_s(nodo=@radice)
    if nodo
      return nodo.to_s+to_s(nodo.sx)+to_s(nodo.dx)
    end
    return ""
  end

  def fogliame(nodo=@radice)
    if nodo
      if nodo.foglia?
        return [nodo.valore]
      else
        return fogliame(nodo.sx)+fogliame(nodo.dx)
      end
    else
      return []
    end
  end
end

albero=Albero.new
albero.radice=Nodo.new('a')
albero.radice.sx=Nodo.new('b')
albero.radice.sx.sx=Nodo.new('c')
albero.radice.sx.dx=Nodo.new('d')
albero.radice.dx=Nodo.new('e')
albero.radice.dx.sx=Nodo.new('f')
puts albero
puts albero.dimensione
puts albero.profondità.to_s
puts albero.fogliame.to_s
