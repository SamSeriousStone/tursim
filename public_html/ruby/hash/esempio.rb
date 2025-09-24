h={"louder than hell"=>"manowar","kings of metal"=>"manowar","vengeance"=>"crom"}
album=gets.chomp
gruppo=h[album]
if gruppo
  puts gruppo
else
  puts "album inesistente"
end
