def visita(path=Dir.pwd)
  puts path
  if File.directory?(path)&&!File.symlink?(path)#se il percorso è una directory ma non un link simbolico (che potrebbe causare cicli
    children=Dir.entries(path)			#children è un array e dentro c'è anche . (directory corrente) e .. (directory superiore)
    for child in children			#child è una stringa
      if child[0]!="."				#imponento che il primo CARATTERE di child sia diverso dal punti salta i file nascosti, la direcory corrente e quella superiore
        visita(path+"/"+child)			#passo ricorsivo
      end
    end
  end
end

visita						#visita viene chiamato senza argomenti perché di default viene assunto come percorso la directory corrente
