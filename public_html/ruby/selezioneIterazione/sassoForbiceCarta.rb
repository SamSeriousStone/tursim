#encoding:UTF-8
c1="sì"
c2="sì"
while c1=="sì"&&c2=="sì"
  puts "giocatore 1, scegli sasso, forbice o carta"
  mano1=gets.chomp
  puts "giocatore 2, scegli sasso, forbice o carta"
  mano2=gets.chomp
  if mano1==mano2
    puts "pareggio"
  elsif (mano1=="forbice"&&mano2=="carta")||(mano1=="sasso"&&mano2=="forbice")||(mano1=="carta"&&mano2=="sasso")
    puts "vince giocatore 1"
  elsif (mano2=="forbice"&&mano1=="carta")||(mano2=="sasso"&&mano1=="forbice")||(mano2=="carta"&&mano1=="sasso")
    puts "vince giocatore 2"
  else
    puts "tenete bene quelle mani!!"
  end
  puts "giocatore1, vuoi continuare?"
  c1=gets.chomp
  puts "giocatore2, vuoi continuare?"
  c2=gets.chomp
end