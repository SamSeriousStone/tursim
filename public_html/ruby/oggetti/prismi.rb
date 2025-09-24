class Quadrato
  def initialize(lato)
    @lato=lato
  end
  def perimetro
    return @lato*4
  end
  def area
    return @lato*@lato
  end
end

class Rettangolo
  def initialize(base,altezza)
    @base=base
    @altezza=altezza
  end
  def perimetro
    return (@base+@altezza)*2
  end
  def area
    return @base*@altezza
  end
end

PI=3.14
class Cerchio
  def initialize(raggio)
    @raggio=raggio
  end
  def raggio
    return @raggio
  end
  def perimetro
    return 2*PI*raggio
  end
  def area
    return PI*raggio*raggio
  end
end

class Prisma
  def initialize(base,altezza)
    @base=base
    @altezza=altezza
  end
  def base
    return @base
  end
  def altezza
    return @altezza
  end
  def volume
    return base.area*altezza
  end
  def superficie
    return 2*base.area+base.perimetro*altezza
  end
end

class Piripicchio
  def area
    return 10
  end
  def perimetro
    return 45
  end
end

base=Piripicchio.new
prisma=Prisma.new(base,7)
puts prisma.volume
puts prisma.superficie
