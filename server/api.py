from flask import Flask, jsonify
from flaskext.mysql import MySQL
from flask_cors import CORS

from customer import CustomerCalendar, CustomerReservation

app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={
    r"/*": {
        "origins": "*"
    }
})
mysql = MySQL()

app.config['MYSQL_DATABASE_USER'] = 'wesleyvuong@wesleyv'  # Voer de username in
app.config['MYSQL_DATABASE_PASSWORD'] = '+U8&4d{>,mFE9C}E'  # Voer het wachtwoord in
app.config['MYSQL_DATABASE_DB'] = 'website'  # Voer welk Database het is
app.config[
    'MYSQL_DATABASE_HOST'] = 'wesleyv.mysql.database.azure.com'  # Voer hier localhost of (iets anders, nog niet naar gekeken)

mysql.init_app(app)


@app.route('/')
def get():
    cur = mysql.connect().cursor()
    cur.execute('select * from kapper')  # Voer bij TabelX de naam van de tabel in!
    r = [dict((cur.description[i][0], value)
              for i, value in enumerate(row)) for row in cur.fetchall()]
    return jsonify({'myCollection': r})


@app.route("/openingstijden")
def get_opening_hours():
    calendar = CustomerCalendar.get_opening_hours()
    return jsonify({'opening_hours_dm': calendar["day_month_format"], 'opening_hours_fd': calendar["sql_date_format"]})


@app.route("/reserveringen")
def get_appointments():
    time_dict = CustomerCalendar.get_opening_hours()['sql_date_format']
    begin_datum = time_dict[0]
    eind_datum = time_dict[9]
    cur = mysql.connect().cursor()
    cur.execute(
        "SELECT date_format(begin_datum, '%d-%m-%Y %H:%i:%S') as begin_datum, date_format(eind_datum,'%d-%m-%Y %H:%i:%S') as eind_datum,kapper_id FROM website.reservation WHERE begin_datum >= '" + begin_datum + "' and eind_datum <= '" + eind_datum + "';")
    afspraken = [dict((cur.description[i][0], value) for i, value in enumerate(row)) for row in cur.fetchall()]

    cur.execute("SELECT id,naam FROM website.kapper;")
    kappers = [dict((cur.description[i][0], value) for i, value in enumerate(row)) for row in cur.fetchall()]

    cur.close()
    reserveringen = CustomerReservation.getAppointments(afspraken, kappers)
    return jsonify({'reserveringen': reserveringen})


#    return jsonify({'reserveringen': r})

@app.route('/behandeling')
def behandeling():
    cur = mysql.connect().cursor()
    cur.execute("select * from reservation;")
    r = [dict((cur.description[i][0], value) for i, value in enumerate(row)) for row in cur.fetchall()]
    cur.close()
    return jsonify({'reserveringen': r})


if __name__ == '__main__':
    app.run()




