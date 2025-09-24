#encoding: UTF-8
continua='sì'
while continua=='sì'
  puts "Come ti chiami?"
  nome=gets.chomp
  if nome!='ruggero'
    puts 'Proprio un bel nome '+nome
    puts 'Temevo che ti chiamassi ruggero!'
  else
    puts 'Mmmmhh avevo un professore che si chiamava così... mi ha bocciato quattro volte...'
  end
  puts 'Quanti anni hai '+nome+'?'
  anni=gets.to_i
  if anni<18
    puts 'PARENTAL ADVISORY - EXPLICIT CONTENT'
    puts 'Questo programma non è adatto ai minori di anni 18, mi spiace. Sarai reindirizzato alla versione edulcorata'
    puts 'Preferisci i puffi o gli snorky?'
    cartone=gets.chomp
    if cartone=='puffi'
      puts 'Chi non adora i puffi? Soprattutto da mangiare!'
    elsif cartone=='snorky'
      puts 'Adoro gli spiriti ribelli!'
    else
      puts 'Che roba è??!!'
    end
  else
    puts 'Pilolola rossa o pillola blu?'
    pillola=gets.chomp
    if pillola=='rossa'
      puts 'Benvenuto nel paese delle meraviglie! Segui il bianconiglio!'
    elsif pillola=='blu'
      puts 'Matrix non esiste e gli hacker sono tutti cattivi, soprattutto Richard Stallman'
    else
      puts 'Sei sicuro di vederci bene?'
    end
  end
  puts 'vuoi continuare?'
  continua=gets.chomp
end
