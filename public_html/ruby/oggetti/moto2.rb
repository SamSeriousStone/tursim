class Marca
  def initialize(nome,nazione)
    @nome=nome
    @nazione=nazione
  end
  def nazione=(nazione)
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
  def initialize(marca,modello,cilindrata,potenza,velocità)
    @marca=marca
    @modello=modello
    @cilindrata=cilindrata
    @potenza=potenza
    @velocità=velocità
  end
  def cilindrata=(cilindrata)
    @cilindrata=cilindrata
  end
  def potenza=(potenza)
    @potenza=potenza
  end
  def velocità=(velocità)
    @velocità=velocità
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
  def velocità
    return @velocità
  end
  def piùVeloce?(moto)
    return velocità>moto.velocità
  end
  def piùPotente?(moto)
    return potenza>moto.potenza
  end
  def to_s
    return marca.to_s+' '+modello+' '+cilindrata.to_s+' '+potenza.to_s+' '+velocità.to_s
  end
end

class Rivenditore
  def initialize
    @moti=[]
  end
  def acquista(moto)
    @moti.push(moto)
  end
  def cerca(modello)
    trovate=[]
    for moto in @moti
      if moto.modello==modello
        trovate.push(moto)
      end
    end
    return trovate
  end
end


aprilia=Marca.new('aprilia','italia')
ducati=Marca.new('ducati','italia')
moto1=Moto.new(ducati,'monster',1000,130,200)
moto2=Moto.new(aprilia,'af1sport',125,30,170)
moto3=Moto.new('ducati','996',996,160,290)
rivenditore=Rivenditore.new
rivenditore.acquista(moto1)
rivenditore.acquista(moto2)
rivenditore.acquista(moto3)
puts rivenditore.cerca(gets.chomp)
aprilia.nazione='giappone'
puts rivenditore.cerca(gets.chomp)
