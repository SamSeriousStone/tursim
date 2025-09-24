class Componente
  def initialize(nome,cognome)
    @nome=nome
    @cognome=cognome
  end
  def to_s
    return "nome:"+@nome+" cognome:"+@cognome
  end
end

class Attore<Componente
  def initialize(nome,cognome,oscar)
    super(nome,cognome)
    @oscar=oscar
  end
  def to_s
    return super+" oscar:"+@oscar.to_s
  end
end

a=[]
a.push(Componente.new("bud","spencer"))
a.push(Attore.new("terence","hill",99))

#prolisso
i=0
while i<a.length
  puts a[i].to_s
  i=i+1
end

#stringato
puts a
