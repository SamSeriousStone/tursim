# Tre hash table da principio vuote che verranno riempite con coppie chiave (stringa) - valore (array). 
canzoni={}
albums={}
gruppi={}

# TRACCIA, ALBUM, ANNO, GRUPPO, NAZIONE sono costanti
TRACCIA=0
ALBUM=1
ANNO=0
GRUPPO=1
NAZIONE=0

while true
  puts "titolo canzone"
  titoloCanzone=gets.chomp
  if canzone=canzoni[titoloCanzone]
    puts canzone
  else
    canzone=[]	#ogni canzone è un array contenente la traccia (posizione 0) e l'album (posizione 1)
    puts "traccia"
    canzone.push(gets.to_i)	#push aggiunge in coda all'array
    puts "album"
    canzone.push(gets.chomp)
    canzoni[titoloCanzone]=canzone
  end
  titoloAlbum=canzone[ALBUM]
  if album=albums[titoloAlbum]
  puts album
  else
    album=[]	#ogni album è un array contenente l'anno di uscita (posizione 0) e il gruppo (posizione 1)
    puts "anno"
    album.push(gets.to_i)
    puts "gruppo"
    album.push(gets.chomp)
    albums[titoloAlbum]=album
  end
  nomeGruppo=album[GRUPPO]
  if gruppo=gruppi[nomeGruppo]
    puts gruppo
  else
    gruppo=[]	#ogni gruppo è un array contenente la nazione di provenienza (posizione 0) e in futuro altro
    puts "nazione"
    gruppo.push(gets.chomp)
    gruppi[nomeGruppo]=gruppo
  end
end

#NB: Alcuni controlli potrebbero risultare inutili. Si potrebbero annidare gli if per rendere il programma leggermente più efficiente (ma meno leggibile). 
