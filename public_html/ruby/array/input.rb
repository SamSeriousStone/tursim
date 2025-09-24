#Legge delle stringhe in input e le inseriesce in una lista

a=[]
while riga=gets #un qualunque oggetto si comporta come true tranne nil che si comporta come false
  a.push(riga.chomp)
end
puts a
