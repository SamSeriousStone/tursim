#somma partendo dal successore
def somma(a,b)
  s=a
  i=0
  while i<b
    s=s.succ
    i=i.succ
  end
  return s
end

#prodotto partendo dalla somma
def prodotto(a,b)
  p=0
  i=0
  while i<b
    p=somma(p,a)
    i=i.succ
  end
  return p
end

#elevamento a potenza partendo dal prodotto
def potenza(a,b)
  p=1
  i=0
  while i<b
    p=prodotto(p,a)
    i=i.succ
  end
  return p
end

puts potenza(2,8)
