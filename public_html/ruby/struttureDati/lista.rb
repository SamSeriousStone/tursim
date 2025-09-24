class Nodo
  def initialize(valore)
    @valore=valore
    #@succ=nil
  end
  def succ
    return @succ
  end
  def succ=(nodo)
    @succ=nodo
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

  def vuota?			#ritorna se (true o false) la lista è vuota
    return @primo==nil
  end

  def un_solo_nodo?		#ritorna se (true o false) la lista è formata da un solo nodo
    return @primo==@ultimo
  end

  def push(valore)		#aggiunge un nodo (passando un valore) in fondo alla lista
    nodo=Nodo.new(valore)
    if vuota?
      @primo=nodo
    else
      @ultimo.succ=nodo
    end
    @ultimo=nodo		#aggiorna l'ultimo nodo a quello appena aggiunto
  end

  def get(n)			#ritorna l'ennesimo elemento della lista
    if n<0			#se viene inserita una posizione negativa ritorna nil
      return nil
    end
    nodo=@primo
    i=0
    while nodo&&i<n		#scorre tutti i nodi della lista fino all'ennesimo o fino a che la lista finisce
      nodo=nodo.succ
      i=i+1
    end
    return nodo
  end

  def rimuovi(n)		#rimuova l'ennesimo nodo dalla lista
    prec=get(n-1)
    if prec
      prec.succ=prec.succ.succ	#attacca il nodo precedente al nodo successivo
    elsif n==0			#se si vuole inserire all'inizio
      @primo=@primo.succ	#il primo nodo diventa il secondo
    end
  end

  def inserisci(val,n)		#inserisce val in un nodo nella posizione n
    nodo=Nodo.new(val)
    prec=get(n-1)		#trova il nodo precedente (nil se non esiste)
    if prec			#se esiste
      nodo.succ=prec.succ
      prec.succ=nodo
    elsif n==0			#se il precedente non esiste e la posizione richiesta è 0
      nodo.succ=@primo
      @primo=nodo
    end
  end

  def to_s			#prende tutti i valori della lista e li concatena dopo averli trasformati in stringa
    s=''
    nodo=@primo
    while nodo
      s=s+nodo.to_s
      nodo=nodo.succ
    end
    return s
  end

  def cerca(valore)		#determina se (true o false) il valore cercato esiste
    nodo=@primo
    while nodo
      if nodo.valore==valore
        return true
      end
      nodo=nodo.succ
    end
    return false
  end

end

lista=Lista.new
lista.push('a')
lista.push('b')
lista.push('c')
lista.push('d')
lista.push('e')
lista.push('f')
lista.push('g')
lista.push('h')
puts lista
lista.inserisci('k',5)
puts lista
lista.inserisci('q',0)
puts lista
lista.rimuovi(2)
puts lista
lista.rimuovi(0)
puts lista
puts lista.cerca('g')
puts lista.cerca('z')
