def swap(a,i,j)
  t=a[i]
  a[i]=a[j]
  a[j]=t
  puts a.to_s
end


def quick(a,b,e)
  if b<e
    pivot=a[b]
    l=b+1
    r=e+1
    while l<r
      if a[l]<pivot 
        l=l+1
      else
        r=r-1
        swap(a,l,r) 
      end
    end
    l=l-1
    swap(a,b,l)
    quick(a,b,l)
    quick(a,r,e)
  end
end

a=eval(gets)
puts a.to_s
quick(a,0,a.length-1)
puts a.to_s
