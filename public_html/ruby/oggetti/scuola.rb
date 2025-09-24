class Studente
  def initialize(cognome,nome,anno)
    @cognome=cognome
    @nome=nome
    @anno=anno
  end
  def cognome
    return @cognome
  end
  def nome
    return @nome
  end
  def anno
    return @anno
  end
  def to_s
    return cognome+' '+nome+' '+anno.to_s
  end
end

class Classe
  def initialize(anno,sezione)
    @anno=anno
    @sezione=sezione
    @studenti=[]
  end
  def anno
    return @anno
  end
  def sezione
    return @sezione
  end
  def successivo
    @anno=anno+1
  end
  def aggiungiStudente(cognome,nome,anno)
    @studenti.push(Studente.new(cognome,nome,anno))
  end
  def to_s
    s=anno.to_s+sezione+"\n"
    for studente in @studenti
      s=s+studente.to_s+"\n"
    end
    return s
  end
end

c1=Classe.new(3,'BSA')
c1.aggiungiStudente('gugole','emanuele',2002)
c1.aggiungiStudente('zandona','federico',2001)
puts c1
