def somma(a,b)
  if b==0
    return a
  else
    return somma(a,b.pred).succ
  end
end

def prodotto(a,b)
  if b==0
    return 0
  else
    return somma(a,prodotto(a,b.pred))
  end
end

def potenza(a,b)
  if b==0
    return 1
  else
    return prodotto(a,potenza(a,b.pred))
  end
end

def differenza(a,b)
  if b==0
    return a
  else
    return differenza(a,b.pred).pred
  end
end
