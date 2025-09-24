class Persona
  def initialize(nome,cognome,anno,sesso,laurea)
    @nome=nome
    @cognome=cognome
    @anno=anno
    @sesso=sesso
    @laurea=laurea
  end
  def to_s
    laureato="non laureato"
    if @laurea
      laureato="laureato"
    end
    return @nome+" "+@cognome+" "+@anno.to_s+" "+@sesso+" "+laureato
  end
end


class Insegnante<Persona
  def initialize(nome,cognome,anno,sesso)
    super(nome,cognome,anno,sesso,true)
    @materia=[]
  end
  def aggiungiMateria(materia)
    @materia.push(materia)
  end
  def to_s
    if @sesso=="M"
      return "Prof. "+super
    else
      return "Prof.ssa "+super
    end
  end
end


p=Persona.new("Pippo","Baudo",1954,"M",false)
i=Insegnante.new("Emanuele","Ferri",1995,"M")
f=Insegnante.new("Gabriella","Corsi",1975,"F")
puts p
puts i
puts f
