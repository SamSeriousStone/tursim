require 'sqlite3'
db=SQLite3::Database.new('db.sqlite')
db.results_as_hash=true
donatori=db.execute('select * from donatore')
#db.close
for donatore in donatori
  puts donatore['nominativo']
end
