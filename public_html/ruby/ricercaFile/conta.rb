#Conta il numero di file (non directory o link) presenti a partire dalla directory corrente.

def conta(path=Dir.pwd)
  if File.directory?(path)&&!File.symlink?(path)#se il percorso è una directory ma non un link simbolico (che potrebbe causare cicli
    n=0
    children=Dir.entries(path)			#children è un array e dentro c'è anche . (directory corrente) e .. (directory superiore)
    for child in children			#child è una stringa
      if child[0]!="."				#imponento che il primo CARATTERE di child sia diverso dal punti salta i file nascosti, la direcory corrente e quella superiore
        n=n+conta(path+"/"+child)		#passo ricorsivo
      end
    end
  else
    n=1
  end
  return n
end

puts conta					#conta viene chiamato senza argomenti perché di default viene assunto come percorso la directory corrente
