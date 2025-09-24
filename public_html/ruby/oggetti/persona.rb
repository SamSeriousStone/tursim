class Persona
  def initialize(nominativo,anno)
    @nominativo=nominativo
    @anno=anno
  end
  def nominativo=(nominativo)
    @nominativo=nominativo
  end
  def nominativo
    return @nominativo
  end
  def eta
    return 2016-@anno
  end
end

p=Persona.new("poldo",1967)
puts p.nominativo
p.nominativo="topolino"
puts p.nominativo
