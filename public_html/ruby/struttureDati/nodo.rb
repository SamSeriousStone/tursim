class Nodo
  def initialize(valore)
    @valore=valore
  end
  def valore
    return @valore
  end
  def to_s
    return @valore.to_s
  end
  def succ=(nodo)
    @succ=nodo
  end
  def succ
    return @succ
  end
end

class Lista
  def initialize
    #@primo=nil
  end
  def push(valore)
    if @primo==nil
       @primo=Nodo.new(valore)
    else
      nodo=@primo
      while nodo.succ!=nil
        nodo=nodo.succ
      end
      nodo.succ=Nodo.new(valore)
    end
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
end


lista=Lista.new
lista.push(4)
lista.push(3)
lista.push(7)
lista.push(3)
lista.push(1)
lista.push(2)
puts lista
