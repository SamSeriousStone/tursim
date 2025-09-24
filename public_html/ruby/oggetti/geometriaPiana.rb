class PuntoProf
  def initialize(x,y)
    @x=x
    @y=y
  end
  def x
    return @x
  end
  def y
    return @y
  end
  def distanza(p)
    return Math.sqrt((x-p.x)**2+(y-p.y)**2)
  end
end

class SegmentoProf
  def initialize(xa,ya,xb,yb)
    @a=Punto.new(xa,ya)
    @b=Punto.new(xb,yb)
  end
  def a
    return @a
  end
  def b
    return @b
  end
end

class CirconferenzaProf
  def initialize(xc,yc,r)
    @c=Punto.new(xc,yc)
    @r=r
  end
  def c
    return @c
  end
  def r
    return @r
  end
end

class ComposizioneProf
  def initialize
    @figure=[]
  end
  def aggiungi(figura)
    @figure.push(figura)
  end
end

class Punto<PuntoProf
  def to_s
    return "("+x.to_s+","+y.to_s+")"
  end
  def trasla(dx,dy)
    @x=@x+dx
    @y=@y+dy
  end
end

class Segmento<SegmentoProf
  def to_s
    return "("+a.to_s+","+b.to_s+")"
  end
  def trasla(dx,dy)
    a.trasla(dx,dy)
    b.trasla(dx,dy)
  end
end

class Circonferenza<CirconferenzaProf
  def to_s
    return "("+c.to_s+","+r.to_s+")"
  end
  def trasla(dx,dy)
    c.trasla(dx,dy)
  end
end

class Composizione<ComposizioneProf
  def to_s
    s=""
    for figura in @figure
      s=s+figura.to_s+"\n"
    end
    return s
  end
  def trasla(dx,dy)
    i=0
    while i<@figure.length
      @figure[i].trasla(dx,dy)
      i=i+1
    end
  end
end


p=Punto.new(4,2)
s=Segmento.new(0,0,3,5)
c=Circonferenza.new(6,5,10)
f=Composizione.new
f.aggiungi(p)
f.aggiungi(s)
f.aggiungi(c)


p2=Punto.new(0,0)
s2=Segmento.new(1,1,3,5)
f2=Composizione.new
f2.aggiungi(p2)
f2.aggiungi(s2)
f2.aggiungi(f)

puts f2
f2.trasla(4,1)
puts "--------"
puts f2
