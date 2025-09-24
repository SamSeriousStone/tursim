class Nodo
  def initialize(valore)
    @valore=valore
    @figli=[]
  end
  def valore
    return @valore
  end
  def aggiungiFiglio(valore)
    @figli.push(Nodo.new(valore))
  end
  def figlio(n)
    return @figli[n]
  end
  def to_s 
    s=valore.to_s
    for figlio in @figli
      s+=figlio.to_s #chiamata ricorsiva
    end
    return s
  end
  def dimensione
    d=1
    for figlio in @figli
      d+=figlio.dimensione #chiamata ricorsiva
    end
    return d
  end
  def altezza
    m=0
    for figlio in @figli
      m=[m,figlio.altezza].max   #chiamata ricorsiva
    end
    return m+1
  end
  def cerca(cercato)
    trovato=(valore==cercato)
    for figlio in @figli
      trovato=trovato||figlio.cerca(cercato)
    end
    return trovato
  end
end


albero=Nodo.new(4)
albero.aggiungiFiglio(2)
albero.figlio(0).aggiungiFiglio(9)
albero.aggiungiFiglio(4)
albero.figlio(1).aggiungiFiglio(1)
albero.figlio(1).aggiungiFiglio(3)
puts albero
puts albero.dimensione
puts albero.altezza
puts albero.cerca(3)
