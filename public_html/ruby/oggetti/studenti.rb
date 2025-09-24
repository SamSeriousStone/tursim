#encoding:utf-8

class Studente
  def initialize(nominativo,anno)
    @nominativo=nominativo
    @anno=anno
  end
  def nominativo
    return @nominativo
  end
  def nominativo=(nominativo)
    @nominativo=nominativo
  end
  def età
    return 2016-@anno
  end
  def maggiorenne
    return età>=18
  end
  def to_s
    return nominativo+" "+età.to_s
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
  def aggiungi(studente)
    @studenti.push(studente)
  end
  def studenti
    return @studenti
  end
  def numeroStudenti
    return @studenti.length
  end
end

s1=Studente.new("paperino",1943)
s2=Studente.new("topolino",1939)
c=Classe.new(4,"bsa")
c.aggiungi(s1)
c.aggiungi(s2)
puts c.studenti
puts c.numeroStudenti
