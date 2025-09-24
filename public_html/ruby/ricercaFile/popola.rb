#Popola un albero n-ario a partire dalla directory corrente e poi ne stampa il contenuto.

class Nodo
  def initialize(value)
    @value=value
    @children=[]
  end
  def addChild(value)
    nodo=Nodo.new(value)
    @children.push(nodo)
  end
  def to_s
    s=@value.to_s
    for child in @children
      s=s+"\n"+child.to_s #ricorsione
    end
    return s
  end
end

def popola(path=Dir.pwd)
  nodo=Nodo.new(File.basename(path))
  if File.directory?(path)&&!File.symlink?(path)
    children=Dir.entries(path)
    for child in children
      if child[0]!="."
        nodo.addChild(popola(path+"/"+child))
      end
    end
  end
  return nodo
end

radice=popola
puts radice
