from flask import Flask, jsonify
from flaskext.mysql import MySQL


app = Flask(__name__)
mysql = MySQL()

app.config['MYSQL_DATABASE_USER'] = 'username'          #Voer de username in
app.config['MYSQL_DATABASE_PASSWORD'] = 'password'      #Voer het wachtwoord in
app.config['MYSQL_DATABASE_DB'] = 'database'            #Voer welk Database het is
app.config['MYSQL_DATABASE_HOST'] = 'localhost'         #Voer hier localhost of (iets anders, nog niet naar gekeken)

mysql.init_app(app)

@app.route('/')
def get():
    cur = mysql.connect().cursor()
    cur.execute('''select * from TabelX''')             #Voer bij TabelX de naam van de tabel in!
    r = [dict((cur.description[i][0], value)
                for i, value in enumerate(row)) for row in cur.fetchall()]
    return jsonify({'myCollection': r})

if __name__ == '__main__':
    app.run()