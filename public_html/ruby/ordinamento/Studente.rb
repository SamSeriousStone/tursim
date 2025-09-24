class Studente
  def initialize(nome,cognome,anno,sezione)
    @nome=nome
    @cognome=cognome
    @anno=anno
    @sezione=sezione
  end
  def cognome
    return @cognome
  end
  def nome
    return @nome
  end
  def to_s
    return @nome+@cognome+@anno.to_s+@sezione
  end
  def >(studente)
    return (@cognome>studente.cognome)||(@cognome==studente.cognome && @nome>studente.nome)
  end
end

s=Studente.new('maddalena','anselmi',4,'csa')
t=Studente.new('matteo','mastrolia',4,'csa')
puts s
puts t
puts s>t
