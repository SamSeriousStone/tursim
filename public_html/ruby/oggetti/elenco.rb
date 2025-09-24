class Studente
  def initialize(cognome,nome)
    @cognome=cognome
    @nome=nome
  end
  def to_s
    return @cognome+" "+@nome
  end
end


a=[3,"ciao",5.2,Studente.new("pallino","pinco")]
s=""
for elemento in a
  s=s+elemento.to_s
end
puts s
