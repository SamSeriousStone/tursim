def nil.size
  return 0
end

class Node
  attr_accessor :sx, :dx, :value
  def initialize(value)
    @value=value
  end
  def to_s
    value.to_s+sx.to_s+dx.to_s
  end
  def size
    1+sx.size+dx.size
  end
end

root=Node.new(3)
root.sx=Node.new(4)
root.sx.sx=Node.new(8)
root.sx.dx=Node.new(2)
root.dx=Node.new(7)
root.dx.sx=Node.new(5)
root.dx.sx.sx=Node.new(9)
puts root
puts root.size
