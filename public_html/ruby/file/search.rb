def tree(root)
  children=Dir.glob(root+'/*')
  for child in children
    if !File.symlink?(child)
      if File.directory?(child)
        tree(child)
      else
        puts child
      end
    end
  end
end
puts "inserisci la directory da cui cominciare la ricerca"
root=gets.chomp
tree(root)
