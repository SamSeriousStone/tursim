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
    return 2015-anno
  end
  def maggiorenne?
    return età>=18
  end
end

class Classe
  def initialize(anno,sezione)
    @anno=anno
    @sezione=sezione
    @studenti={} #l'uso di una hash per contenere gli studenti è opinabile ma semplifica la ricerca
  end
  def sezione
    return @sezione
  end
  def anno
    return @anno
  end
  def iscriviStudente(cognome,nome,anno)
    @studenti[cognome+nome]=Studente.new(nome,cognome,anno)
  end
  def studente(cognome,nome)
    return @studenti[cognome+nome]
  end
  def numeroStudenti
    return @studenti.size
  end
  def ritiraStudente(cognome,nome)
    @studenti.delete(cognome+nome)
  end
  def passaggioAnno
    @anno+=1 #abbreviazione per @anno=@anno+1
  end
end

class Scuola
  def initialize(nome)
    @nome=nome
    @classi={}
  end
  def aggiungiClasse(anno,sezione)
    @classi[anno.to_s+sezione]=Classe.new(anno,sezione)
  end
  def classe(anno,sezione)
    return @classi[anno.to_s+sezione]
  end
  def passaggioAnno
    classi={}
    @classi.each do |chiave,classe|
      classe.passaggioAnno
      classi[classe.anno.to_s+classe.sezione]=classe
    end
    @classi=classi
  end
end


copernico=Scuola.new("copernico")

copernico.aggiungiClasse(4,"BSA")
copernico.aggiungiClasse(4,"CSA")
copernico.aggiungiClasse(4,"DSA")

#accedere alle classi attraverso delle tabelle hash è ovviamente più lento che accedere direttamente mediante un riferimento all'oggetto
copernico.classe(4,"BSA").iscriviStudente("furlan","alice",1997)
copernico.classe(4,"BSA").iscriviStudente("ceoletta","marco",1997)
copernico.classe(4,"BSA").iscriviStudente("mancini","maia",1997)
copernico.classe(4,"BSA").iscriviStudente("brosco","paolo",1997)
copernico.classe(4,"BSA").iscriviStudente("bovo","giorgia",1997)

copernico.classe(4,"CSA").iscriviStudente("avesani","simone",1997)
copernico.classe(4,"CSA").iscriviStudente("bellinazzi","leonardo",1997)
copernico.classe(4,"CSA").iscriviStudente("gini","beatrice",1997)
copernico.classe(4,"CSA").iscriviStudente("romelli","anna",1997)
copernico.classe(4,"CSA").iscriviStudente("urbani","mattia",1997)

copernico.classe(4,"DSA").iscriviStudente("aldegheri","alessandro",1997)
copernico.classe(4,"DSA").iscriviStudente("debattisti","davide",1997)
copernico.classe(4,"DSA").iscriviStudente("fenzi","chiara",1997)
copernico.classe(4,"DSA").iscriviStudente("lorenzini","riccardo",1997)
copernico.classe(4,"DSA").iscriviStudente("lovati","stefano",1997)
copernico.classe(4,"DSA").iscriviStudente("melotti","luca",1997)
copernico.classe(4,"DSA").iscriviStudente("zenari","michele",1997)

puts "numero studenti 4BSA"
puts copernico.classe(4,"BSA").numeroStudenti()

puts "numero studenti 4CSA"
puts copernico.classe(4,"CSA").numeroStudenti()

puts "numero studenti 4DSA"
puts copernico.classe(4,"DSA").numeroStudenti()

puts "melotti sarà maggiorenne?"
puts copernico.classe(4,"DSA").studente("melotti","luca").maggiorenne?


copernico.classe(4,"DSA").ritiraStudente("melotti","luca") #melotti si ritira
copernico.passaggioAnno #la classe 4BSA passa in quinta (tranne melotti che si è ritirato)

puts "anno della novella 5DSA"
puts copernico.classe(5,"DSA").anno

puts "sezione della novella 5DSA"
puts copernico.classe(5,"DSA").sezione

puts "numero di studenti della 5DSA (melotti si è ritirato in quarta)"
puts copernico.classe(5,"DSA").numeroStudenti
