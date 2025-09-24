class Marca
  def initialize(nome,nazione)
    @nome=nome
    @nazione=nazione
  end
  def nome
    return @nome
  end
  def nazione
    return @nazione
  end
  def to_s
    return nome+' '+nazione
  end
end

class Moto
  def initialize(marca,modello,cilindrata,potenza)
    @marca=marca
    @modello=modello
    @cilindrata=cilindrata
    @potenza=potenza
  end
  def cilindrata=(cilindrata)
    @cilindrata=cilindrata
  end
  def potenza=(potenza)
    @potenza=potenza
  end
  def marca
    return @marca
  end
  def modello
    return @modello
  end
  def cilindrata
    return @cilindrata
  end
  def potenza
    return @potenza
  end
  def to_s
    return marca.to_s+' '+modello.to_s+' '+cilindrata.to_s+' '+potenza.to_s
  end
  def piùPotente?(moto)
    return potenza>moto.potenza
  end
end

class Rivenditore
  def initialize(nome,indirizzo)
    @nome=nome
    @indirizzo=indirizzo
    @moti=[]
  end
  def aggiungi(moto)
    @moti.push(moto)
  end
  def cerca(marca)
    trovate=[]
    for moto in @moti
      if moto.marca.nome==marca
        trovate.push(moto)
      end
    end
    return trovate
  end
end

ducati=Marca.new('ducati','italia')
aprilia=Marca.new('aprilia','italia')

monster=Moto.new(ducati,'monster',800,130)
af1=Moto.new(aprilia,'af1',125,30)
rvs1000=Moto.new(aprilia,'rvs1000',1000,180)

rivenditore=Rivenditore.new('automoto','via carlo anti 5')
rivenditore.aggiungi(monster)
rivenditore.aggiungi(af1)
rivenditore.aggiungi(rvs1000)

puts rivenditore.cerca('aprilia')
