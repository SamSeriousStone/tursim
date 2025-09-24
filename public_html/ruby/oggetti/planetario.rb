class CorpoCeleste
  def initialize(nome,massa,diametro)
    @nome=nome
    @massa=massa
    @diametro=diametro
  end
  def nome
    return @nome
  end
  def volume
    return 1.3*3.14*raggio**3
  end
  def diametro
    return @diametro
  end
  def raggio
    return diametro/2.0
  end
  def to_s
    return "nome:"+@nome+"\nmassa:"+@massa.to_s+"\ndiametro:"+@diametro.to_s
  end
end

class Stella<CorpoCeleste
  def initialize(nome,massa,diametro,luminosità)
    super(nome,massa,diametro)
    @luminosità=luminosità
  end
  def to_s
    return super+"\nluminosità"+@luminosità.to_s
  end
end

class Pianeta<CorpoCeleste
  def initialize(nome,massa,diametro,stella)
    super(nome,massa,diametro)
    @stella=stella
  end
  def stella
    @stella
  end
  def to_s
    return super+"\ngira intorno alla stella "+@stella.nome
  end
end

class Satellite<CorpoCeleste
  def initialize(nome,massa,diametro,pianeta)
    super(nome,massa,diametro)
    @pianeta=pianeta
  end
  def to_s
    return super+"\ngira intorno al pianeta "+@pianeta.nome+"\nche a sua volta gira intorno alla stella "+@pianeta.stella.nome
  end
end

class SistemaStellare
  def initialize(nome)
    @nome=nome
    @corpiCelesti=[]
  end
  def aggiungi(cc)
    @corpiCelesti.push(cc)
  end
end

sistemaSolare=SistemaStellare.new("sistema solare")
sistemaSolare.aggiungi(sole=Stella.new("sole",1000,200,5))
sistemaSolare.aggiungi(terra=Pianeta.new("terra",10,2,sole))
sistemaSolare.aggiungi(luna=Satellite.new("luna",3,0.6,terra))
puts sistemaSolare
