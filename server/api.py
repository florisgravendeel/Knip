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

app.config['MYSQL_DATABASE_USER'] = 'wesleyvuong@wesleyv'  # Voer de gebruikersnaam in
app.config['MYSQL_DATABASE_PASSWORD'] = '+U8&4d{>,mFE9C}E'  # Voer het wachtwoord in
app.config['MYSQL_DATABASE_DB'] = 'website'  # Geef aan wat de database het is
app.config[
    'MYSQL_DATABASE_HOST'] = 'wesleyv.mysql.database.azure.com'  # Voer hier het IP-adres.

mysql.init_app(app)


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


@app.route('/kappers', methods=["GET"])
def get_kappers():
    cur = mysql.connect().cursor()
    cur.execute("SELECT naam, aanwezigheid FROM kapper")
    cur.close()
    return jsonify(cur.fetchall())

@app.route('/kappers/aanwezig', methods=["POST"])
def post_kappers():
    cnx = mysql.connect()
    cur = cnx.cursor()

    json_data = request.get_json()
    naam = json_data['naam']
    aanwezigheid = int(json_data['aanwezigheid'])

    print(naam)
    print(type(aanwezigheid))

    cur.execute("UPDATE kapper SET aanwezigheid = %s WHERE naam = %s", (aanwezigheid, naam))

    cnx.commit()
    cur.close()
    return "Verzonden"

if __name__ == '__main__':
    app.run()
