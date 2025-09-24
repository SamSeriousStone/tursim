puts "inserisci il tuo nome"
nome=gets.chomp
puts "inserisci il tuo cognome"
cognome=gets.chomp
if nome=="emanuele" && cognome=="ferri"
  puts "buongiorno professore"
elsif nome=="sandro" && cognome=="turri"
  puts "buongiorno signor preside"
elsif nome=="mattia" && cognome=="pretto"
  puts "pretto! fai silenzio"
else
  puts "ciao studente"
end
