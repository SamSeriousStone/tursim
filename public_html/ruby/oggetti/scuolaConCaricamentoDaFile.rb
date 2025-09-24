class Persona
  def initialize(nominativo,anno)
    @nominativo=nominativo
    @anno=anno
  end
  def nominativo
    return @nominativo
  end
  def anno
    return @anno
  end
  def maggiorenne?
    return 2016-anno>=18
  end
  def to_s
    return nominativo+","+anno.to_s
  end
end

class Studente<Persona
  def initialize(nominativo,anno,crediti)
    super(nominativo,anno)
    @crediti=crediti
  end
  def crediti
    return @crediti
  end
  def aggiungiCrediti(crediti)
    @crediti=@crediti+crediti
  end
  def to_s
    return super+","+crediti.to_s
  end
end

class Docente<Persona
  def initialize(nominativo,anno,materia)
    super(nominativo,anno)
    @materia=materia
  end
  def materia
    return @materia
  end
  def materia=(materia)
    @materia=materia
  end
  def to_s
    return super+","+materia
  end
end

class Classe
  def initialize(anno,sezione)
    @anno=anno
    @sezione=sezione
    @studenti=[]
    @docenti=[]
  end
  def aggiungiStudente(studente)
    if not @studenti.include?(studente)
      @studenti.push(studente)
    end
  end
  def aggiungiDocente(docente)
    if not @docenti.include?(docente)
      @docenti.push(docente)
    end
  end
  def promuovi
    @anno=anno+1
  end
  def docenti
    s=""
    for docente in @docenti
      s=s+docente.to_s+"\n"
    end
    return s
  end
  def studenti
    s=""
    for studente in @studenti
      s=s+studente.to_s+"\n"
    end
    return s
  end
  def to_s
    return "STUDENTI:\n"+studenti+"DOCENTI:\n"+docenti
  end
end

classe=Classe.new(4,"CSA")
studenti=IO.read("studenti.txt").split("\n")
for studente in studenti
  studente=studente.split(",")
  classe.aggiungiStudente(Studente.new(studente[0],studente[1].to_i,studente[2].to_i))
end
docenti=IO.read("docenti.txt").split("\n")
for docente in docenti
  docente=docente.split(",")
  classe.aggiungiDocente(Docente.new(docente[0],docente[1].to_i,docente[2]))
end

puts "inserisci gli studenti"
continua="sì"
while continua!="no"
  puts "nominativo"
  nominativo=gets.chomp
  puts "anno"
  anno=gets.to_i
  puts "crediti"
  crediti=gets.to_i
  classe.aggiungiStudente(Studente.new(nominativo,anno,crediti))
  puts "continua?"
  continua=gets.chomp
end

puts "inserisci i docenti"
continua="sì"
while continua!="no"
  puts "nominativo"
  nominativo=gets.chomp
  puts "anno"
  anno=gets.to_i
  puts "materia"
  materia=gets.chomp
  classe.aggiungiDocente(Docente.new(nominativo,anno,materia))
  puts "continua?"
  continua=gets.chomp
end

puts classe

IO.write("studenti.txt",classe.studenti)
IO.write("docenti.txt",classe.docenti)