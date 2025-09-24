puts "Content-type:text/html\n\n"
puts "<html><head><title>tree</title></head>"

ROOT='/home/ferri-emanuele/public_html'
EXTS=['.html','.htm','.rb','.sqlite','.svg']

def trova(root=ROOT)
  files=Dir.glob(root+'/*').sort
  for file in files
    if File.directory?(file)
      puts '<div class="DropDown">'
      puts '<div class="top">'+File.basename(file)+'</div>'
      puts '<div class="bottom">'
      trova(file)
      puts '</div>'
    elsif EXTS.include?(File.extname(file))
      puts '<a href="'+file+'">'+File.basename(file)+'</a><br/>'
    end
  end
end

trova
puts "</body></html>"