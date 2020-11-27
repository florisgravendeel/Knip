from flask import Flask, jsonify
from flaskext.mysql import MySQL
from flask_cors import CORS

from customer import CustomerCalendar

app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={
    r"/*": {
        "origins": "*"
    }
})
mysql = MySQL()

app.config['MYSQL_DATABASE_USER'] = 'wesleyvuong@wesleyv'                         #Voer de username in
app.config['MYSQL_DATABASE_PASSWORD'] = '+U8&4d{>,mFE9C}E'                        #Voer het wachtwoord in
app.config['MYSQL_DATABASE_DB'] = 'website'                                       #Voer welk Database het is
app.config['MYSQL_DATABASE_HOST'] = 'wesleyv.mysql.database.azure.com'            #Voer hier localhost of (iets anders, nog niet naar gekeken)

mysql.init_app(app)

@app.route('/')
def get():
    cur = mysql.connect().cursor()
    cur.execute('select * from kapper')             #Voer bij TabelX de naam van de tabel in!
    r = [dict((cur.description[i][0], value)
                for i, value in enumerate(row)) for row in cur.fetchall()]
    return jsonify({'myCollection': r})

@app.route("/weekdagen")
def get_opening_hours():
    return jsonify({'opening_hours': CustomerCalendar.getOpeningHours()})

@app.route('/behandeling')
def behandeling():
    cur = mysql.connect().cursor()
    cur.execute('select * from reservation')
    r = [dict((cur.description[i][0], value) for i, value in enumerate(row)) for row in cur.fetchall()]
    #print(len(r))
    for x in range(len(r)):
        print(r[x])

    return jsonify({'reserveringen': r})

if __name__ == '__main__':
    app.run()

    #cur = mysql.connect().cursor()
    #cur.execute('select * from reservation')
    #r = [dict((cur.description[i][0], value) for i, value in enumerate(row)) for row in cur.fetchall()]

    #print(len(r))

    #r[0]['begin_datum'] = "Kaas"
    #for x in range(len(r)):
    #    print(r[x])