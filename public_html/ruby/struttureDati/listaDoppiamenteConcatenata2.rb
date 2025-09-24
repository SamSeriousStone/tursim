class Nodo
  def initialize(valore)
    @valore=valore
    #@prec=nil
    #@succ=nil
  end
  def prec=(nodo)
    @prec=nodo
  end
  def succ=(nodo)
    @succ=nodo
  end
  def prec
    return @prec
  end
  def succ
    return @succ
  end
  def valore
    return @valore
  end
  def to_s
    return valore.to_s
  end
end

class Lista
  def length
    l=0
    nodo=@primo
    while nodo
      l=l+1
      nodo=nodo.succ
    end
    return l
  end
  def vuota?
    return @primo==nil
  end
  def append(valore)
    nodo=Nodo.new(valore)
    if vuota?
      @primo=nodo
    else
      @ultimo.succ=nodo
      nodo.prec=@ultimo
    end
    @ultimo=nodo
  end
  def prepend(valore)
    nodo=Nodo.new(valore)
    if vuota?
      @ultimo=nodo
    else
      @primo.prec=nodo
      nodo.succ=@primo
    end
    @primo=nodo
  end
  def to_s
    s=""
    nodo=@primo
    while nodo
      s=s+nodo.to_s
      nodo=nodo.succ
    end
    return s
  end
  def to_a
    a=[]
    nodo=@primo
    while nodo
      a.append(nodo.valore)
      nodo=nodo.succ
    end
    return a
  end
  def get(n)
    if n>=0 && n<length
      nodo=@primo
      i=0
      while i<n
        nodo=nodo.succ
        i=i+1
      end
      return nodo
    end
  end
  def insert(valore,posizione)
    l=length
    if posizione==0
      prepend(valore)
    elsif posizione==l
      append(valore)
    elsif posizione>=1 && posizione<=l-1
      nodo=Nodo.new(valore)
      succ=get(posizione)
      prec=succ.prec
      prec.succ=nodo
      succ.prec=nodo
      nodo.prec=prec
      nodo.succ=succ
    end
  end
end

lista=Lista.new
lista.append(0)
lista.append(1)
lista.append(2)
lista.append(3)
lista.prepend(-1)
lista.prepend(-2)
lista.prepend(-3)
puts lista
lista.insert('X',-1)
puts lista
