h=Hash.new  #crea una hash vuota

h["k1"]="v"     #inserisce coppie chiave-valore

h["k2"]="v"

h["k3"]="w"

puts h            #stampa la hash in modo grezzo


# Volendo però si farebbe prima così

h={"k1"=>"v","k2"=>"v","k3=>"w"}  #crea una hash già pienotta

puts h                                             #stampa la hash in modo grezzo


h=eval(gets)                #valuta la stringa in input "sperando" che sia una hash

puts h[gets.chomp]     #chiede in input la chiave e stampa il valore corrispondente (sempre che ci sia)