class Persona
  def initialize(nome,cognome,anno)
    @nome=nome
    @cognome=cognome
    @anno=anno
  end
  def nome
    return @nome
  end
  def cognome=(cognome)
    @cognome=cognome
  end
  def cognome
    return @cognome
  end
  def anno=(anno)
    @anno=anno
  end
  def età
    return 2018-@anno
  end
  def to_s
    return nome.to_s+" "+cognome.to_s+" "+età.to_s
  end
end

class Studente<Persona
  def initialize(nome,cognome,anno,classe,sezione)
    super(nome,cognome,anno)
    @classe=classe
    @sezione=sezione
  end
  def classe=(classe)
    @classe=classe
  end
  def sezione=(sezione)
    @sezione=sezione
  end
  def classe
    return @classe
  end
  def sezione
    return @sezione
  end
  def to_s
    return super+" "+classe.to_s+sezione.to_s
  end
end

s1=Studente.new("pippo","cane",2000,4,"BSA")
puts s1
