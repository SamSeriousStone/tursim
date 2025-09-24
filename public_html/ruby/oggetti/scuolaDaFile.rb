#! /usr/bin/ruby

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
    return Time.now.year-anno
  end
  def to_s
    return nome+" "+cognome+" "+età.to_s
  end
end

class Scuola
  def initialize
    @studenti=[]
  end
  def aggiungi(cognome,nome,anno)
    @studenti.push(Studente.new(cognome,nome,anno))
  end
  def cerca(chiave)
    trovati=[]
    for studente in @studenti
      if studente.cognome==chiave||studente.nome==chiave
        trovati.push(studente)
      end
    end
    return trovati
  end
  def to_s
    s=""
    for studente in @studenti
      s=s+studente.to_s+"\n"
    end
    return s
  end
end

scuola=Scuola.new
fileStudenti=File.new("studenti.txt")
for line in fileStudenti
  data=line.split(":")
  cognome=data[0]
  nome=data[1]
  anno=data[2].to_i
  scuola.aggiungi(cognome,nome,anno)
end
puts scuola
#puts scuola.cerca(gets.chomp)
