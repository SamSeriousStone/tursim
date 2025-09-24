ROOT="/home"
EXT=".save"

def trova(root)
  files=Dir.glob(root+"/*").sort
  for file in files
    if File.extname(file)==EXT
      puts file
    end
    if File.directory?(file)
      trova(file)
    end
  end
end

trova(ROOT)
