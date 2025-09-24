def maxArray(a)
  m=a[0]
  i=1
  while i<a.length
    if a[i]>m
      m=a[i]
    end
    i=i+1
  end
  return m
end
