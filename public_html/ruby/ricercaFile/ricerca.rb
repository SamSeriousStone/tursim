def directory?(path)
  return File.exists?(path) && File.directory?(path) && !File.symlink?(path) && File.basename(path)[0]!="."
end

def file?(path)
  return File.exists?(path) && !File.directory?(path) && !File.symlink?(path) && File.basename(path)[0]!="."
end

def ricerca(ext,path=Dir.pwd)
  if file?(path) && File.extname(path)==ext
    puts path
  elsif directory?(path)
    filenames=Dir.entries(path)
    for filename in filenames
      ricerca(ext,path+"/"+filename) #ricorsione
    end
  end
end

ricerca(gets.chomp,gets.chomp)
