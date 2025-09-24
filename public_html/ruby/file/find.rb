EXT=['.html','.xhtml']

def replace(parent,text,newText)
  files=Dir.glob(parent+'/*')
  for file in files
    if !File.symlink?(file)
      if File.directory?(file)
        find(file,text,newText)
      elsif EXT.include?(File.extname(file).downcase)
        s=File.read(file)
        if s.include?(text)
          s.gsub!(text,newText)
          puts s
        end
      end
    end
  end
end

puts 'inserisci directory radice'
root=gets.chomp
replace(root,'http','https')
