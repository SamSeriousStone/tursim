#encoding:utf-8

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
  def età
    return 2016-anno
  end
  def maggiorenne?
    return età>=18
  end
  def to_s
    return cognome+" "+nome+" "+età.to_s
  end
end

class Classe
  def initialize(anno,sezione)
    @anno=anno
    @sezione=sezione
    @studenti=[]
  end
  def sezione
    return @sezione
  end
  def anno
    return @anno
  end
  def iscrivi(cognome,nome,anno)
    @studenti.push(Studente.new(cognome,nome,anno))
  end
  def cerca(s)
    trovati=[]
    i=0
    while i<@studenti.length
      studente=@studenti[i]
      if studente.nome.include?(s)||studente.cognome.include?(s)
        trovati.push(studente)
      end
      i=i+1
    end
    return trovati
  end
  def numeroStudenti
    return @studenti.length
  end
  def passaggioAnno
    @anno+=1 #abbreviazione per @anno=@anno+1
  end
  def to_s
  end
end

c=Classe.new(4,"bsa")
c.iscrivi("ceschi","michele",1998)
c.iscrivi("quarzago","elia",1999)
c.iscrivi("peterlongo","francesco",1997)

puts c.cerca(gets.chomp) 
