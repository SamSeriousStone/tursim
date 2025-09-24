class SuperStringa<String
  def palindroma?
    return self==self.reverse
  end

end

s=SuperStringa.new(gets.chomp)
puts s.palindroma?
