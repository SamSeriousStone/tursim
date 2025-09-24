puts "giocatore 1, vuoi essere pari o dispari?"
risposta=gets.chomp

if risposta=="pari"
  g1=0
  g2=1
elsif risposta=="dispari"
  g1=1
  g2=0
end

puts "spara il numero giocatore 1"
m1=gets.to_i
puts "spara il numero giocatore 2"
m2=gets.to_i
s=m1+m2

if (s%2)==g1
  puts "vince giocatore 1"
else
  puts "vince giocatore 2"
end
