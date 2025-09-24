class Gruppo
  def initialize(nome,anno,nazione)
    @nome=nome
    @anno=anno
    @nazione=nazione
    @albums=[]
  end
  def nome=(nome)
    @nome=nome
  end
  def nome
    return @nome
  end
  def anno
    return @anno
  end
  def nazione
    return @nazione
  end
  def aggiungiAlbum(titolo,anno,genere)
    @albums.push(Album.new(titolo,anno,genere))
  end
  def to_s
    s=nome+" "+anno.to_s+" "+nazione+":\n"
    for album in @albums
      s=s+album.to_s+"\n"
    end
    return s
  end
  def cerca(titolo)
    i=0
    while i<@albums.length && @albums[i].titolo!=titolo
      i=i+1
    end
    return @albums[i]
  end
end

class Album
  def initialize(titolo,anno,genere)
    @titolo=titolo
    @anno=anno
    @genere=genere
    @canzoni=[]
  end
  def titolo
    return @titolo
  end
  def anno
    return @anno
  end
  def genere
    return @genere
  end
  def aggiungiCanzone(titolo,durata)
    @canzoni.push(Canzone.new(titolo,durata))
  end
  def to_s
    s=titolo+" "+anno.to_s+" "+genere+" "+durata.to_s+":"
    for canzone in @canzoni
      s=s+canzone.to_s+"\n"
    end
    return s
  end
  def durata
    d=0
    for canzone in @canzoni
      d=d+canzone.durata
    end
    return d
  end
end

class Canzone
  def initialize(titolo,durata)
    @titolo=titolo
    @durata=durata
  end
  def titolo
    return @titolo
  end
  def durata
    return @durata
  end
  def durata=(durata)
    @durata=durata
  end
  def to_s
    return @titolo+" "+durata.to_s
  end
end


manowar=Gruppo.new("manowar",1980,"usa")
manowar.aggiungiAlbum("kings of metal",1988,"epic metal")
manowar.aggiungiAlbum("fighting the world",1986,"epic metal")
manowar.cerca("kings of metal").aggiungiCanzone("blood of the kings",420)
puts manowar
