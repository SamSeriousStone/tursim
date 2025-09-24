def bab(a)
  b=a
  h=1.0
  while (b-h).abs>0.00000001
    b=(b+h)/2
    h=a/b
  end
  return b
end

puts bab(gets.to_f)
