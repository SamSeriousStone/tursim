#Stampa il percorso completo di tutti i file e le directory con un certo nome a partire dalla directory corrente.

def cerca(file,path=Dir.pwd)
  if File.directory?(path)&&!File.symlink?(path) #path è una directory ma non una scorciatoia
    children=Dir.entries(path)-[".",".."]
    for child in children
      if child==file
        puts path+"/"+file
      end
      cerca(file,path+"/"+child)
    end
  end
end

cerca(gets.chomp)
