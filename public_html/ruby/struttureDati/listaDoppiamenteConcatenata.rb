class Nodo
  def initialize(valore)
    @valore=valore
  end
  def succ
    return @succ
  end
  def succ=(nodo)
    @succ=nodo
  end
  def prec
    return @prec
  end
  def prec=(nodo)
    @prec=nodo
  end
  def valore=(valore)
    @valore=valore
  end
  def valore
    return @valore
  end
  def to_s
    return @valore.to_s
  end
end

class Lista
  def primo
    return @primo
  end

  def ultimo
    return @ultimo
  end

  def to_s
    s=''
    nodo=primo
    while nodo
      s=s+nodo.to_s
      nodo=nodo.succ
    end
    return s
  end
  def vuota?
    return primo==nil
  end

  def append(valore)
    nodo=Nodo.new(valore)
    if vuota?
      @primo=nodo
    else
      ultimo.succ=nodo
      nodo.prec=ultimo
    end
    @ultimo=nodo
  end

  def prepend(valore)
    nodo=Nodo.new(valore)
    if vuota?
      @ultimo=nodo
    else
      primo.prec=nodo
      nodo.succ=primo
    end
    @primo=nodo
  end

  def length
    l=0
    nodo=primo
    while nodo
      l=l+1
      nodo=nodo.succ
    end
    return l
  end

  def get(n)
    nodo=primo
    i=0
    while nodo&&i<n
      nodo=nodo.succ
      i=i+1
    end
    return nodo
  end

  def remove(n)
    nodo=get(n)
    if nodo
      if nodo!=primo
        nodo.prec.succ=nodo.succ
      else
        @primo=nodo.succ
        @primo.prec=nil
      end
      if nodo!=ultimo
        nodo.succ.prec=nodo.prec
      else
        @ultimo=nodo.prec
        @ultimo.succ=nil
      end
    end
  end
end

lista=Lista.new
lista.append('a')
lista.append('b')
lista.append('c')
lista.append('d')
lista.remove(3)
puts lista
