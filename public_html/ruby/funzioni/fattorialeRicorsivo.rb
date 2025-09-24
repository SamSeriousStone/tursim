def fatt(n)
  if n>0
    return n*fatt(n-1)
  elsif n==0
    return 1
  end
end
