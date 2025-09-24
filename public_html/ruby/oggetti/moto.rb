class Marca
  def initialize(nome,nazione)
    @nome=nome
    @nazione=nazione
  end
  def to_s
    return "nome:"+@nome+" nazione:"+@nazione
  end
end


while true
 puts Marca.new(gets.chomp,gets.chomp)
end
