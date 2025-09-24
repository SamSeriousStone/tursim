def bab(a,b=a,h=1.0)
  if (b-h).abs>0.00000001
    bab(a,(b+h)/2,a/b)
  else
    return b
  end
end



puts bab(gets.to_f)
