from flask import Flask, jsonify, request
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
    response = CustomerReservation.get_appointments(mysql.connect())
    return response


@app.route('/nieuweafspraak', methods=["POST"])
def create_appointment():
    response = CustomerReservation.create_appointment(mysql.connect(), request.get_json())
    return response


@app.route('/behandelingen', methods=["GET"])
def behandeling():
    response = CustomerReservation.get_treatments(mysql.connect())
    return response


if __name__ == '__main__':
    app.run()
