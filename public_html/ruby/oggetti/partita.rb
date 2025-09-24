class Giocatore
  def initialize(nominativo,anno)
    @nominativo=nominativo
    @anno=anno
  end
  def nominativo
    return @nominativo
  end
  def anno
    return @anno
  end
  def età
    return 2016-anno
  end
  def maggiorenne?
    return età>=18
  end
  def to_s
    return nominativo+" "+età.to_s
  end
end

class Squadra
  def initialize(nome,zona)
    @nome=nome
    @zona=zona
    @giocatori=[]
  end
  def nome
    return @nome
  end
  def zona
    return @zona
  end
  def setZona(zona)
    @zona=zona
  end
  def aggiungi(giocatore)
    @giocatori.push(giocatore)
  end
  def to_s
    s=nome+" "+zona+"\n"
    i=0
    while i<@giocatori.length
      s=s+@giocatori[i].to_s+"\n"
      i=i+1
    end
    return s
  end
end

class Partita
  def initialize(ospitante,ospite,puntiOspitante,puntiOspite)
    @ospitante=ospitante
    @ospite=ospite
    @puntiOspitante=puntiOspitante
    @puntiOspite=puntiOspite
  end
  def vincitore
    if @puntiOspitante>@puntiOspite
      return @ospitante
    elsif @puntiOspite>@puntiOspitante
      return @ospite
    end
  end
  def derby?
    return @ospitante.zona==@ospite.zona
  end
end

g1=Giocatore.new("pippo",1990)
g2=Giocatore.new("pluto",1985)
s1=Squadra.new("panzerotti","porto")
s2=Squadra.new("polentoni","porto")
s1.aggiungi(g1)
s2.aggiungi(g2)
p=Partita.new(s1,s2,3,3)
puts p.vincitore
puts p.derby?
