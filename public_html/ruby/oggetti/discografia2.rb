class Canzone
  def initialize(titolo,durata)
    @titolo=titolo
    @durata=durata
  end
  def titolo
    return @titolo
  end
  def titolo=(titolo)
    @titolo=titolo
  end
  def durata
    return @durata
  end
  def durata=(durata)
    @durata=durata
  end
  def to_s
    return titolo+" "+ durata.to_s
  end
end

class Album
  def initialize(titolo,anno)
    @titolo=titolo
    @anno=anno
    @canzoni=[]
  end
  def aggiungi(canzone)
    @canzoni.push(canzone)
  end
  def titolo
    return @titolo
  end
  def anno
    return @anno
  end
  def anno=(anno)
    @anno=anno
  end
  def durata
    d=0
    for canzone in @canzoni
      d=d+canzone.durata
    end
    return d
  end
  def to_s
    s=titolo+" "+anno.to_s+"\n"
    for canzone in @canzoni
      s=s+canzone.to_s+"\n"
    end
    return s
  end
end

class Gruppo
  def initialize(nome,nazione)
    @nome=nome
    @nazione=nazione
    @albums=[]
  end
  def nome
    return @nome
  end
  def nazione
    return @nazione
  end
  def aggiungi(album)
    @albums.push(album)
  end
  def to_s
    s=nome+" "+nazione+"\n"
    for album in @albums
      s=s+album.to_s+"\n"
    end
    return s
  end
end


c1=Canzone.new("bohemian rhapsody",6)
c2=Canzone.new("seaside rendezvous",3)
puts c1
puts c2
puts c1.titolo
puts c2.durata
c2.durata=3.5
puts c2.durata
a=Album.new("a night at the opera",1975)
a.aggiungi(c1)
a.aggiungi(c2)
puts a
puts a.durata
g=Gruppo.new("queen","uk")
g.aggiungi(a)
puts g
