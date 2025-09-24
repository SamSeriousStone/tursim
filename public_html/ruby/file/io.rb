s=File.read(gets.chomp)
righe=s.split("\n")	#righe è un array
for riga in righe
  valori=riga.split(" ")#valori è un array
  puts "cognome:"+valori[0]
  puts "nome:"+valori[1]
end
