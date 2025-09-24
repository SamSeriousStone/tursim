class Studente
  def initialize(nome,cognome,anno)
    @nome=nome.capitalize
    @cognome=cognome.capitalize
    @anno=anno
  end
  def classe=(classe)
     @classe=classe
  end
  def nome
    return @nome
  end
  def cognome
    return @cognome
  end
  def anno
    return @anno
  end
  def età
    return 2025-anno
  end
  def maggiorenne?
    return età>=18
  end
  def to_s
    return nome+" "+cognome+" "+età.to_s
  end
end

s1=Studente.new("pinco","pallino",2001)
puts s1
puts s1.maggiorenne?
