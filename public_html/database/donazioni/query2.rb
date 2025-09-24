require 'sqlite3'
db=SQLite3::Database.new('db.sqlite')
#db.results_as_hash=true
puts 'inserisci il donatore'
donatore=gets.chomp
query='select * from donatore where cf="'+donatore+'"'
puts query
donatori=db.execute(query)
#db.close
#puts donatori.to_s
puts '<html><body><table border="1">'
for donatore in donatori
  puts '<tr>'
  for valore in donatore
    print '<td>'+valore+'</td>'
  end
  puts '</tr>'
end
puts '</table></body></html>'
