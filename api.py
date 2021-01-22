from flask import (Flask, render_template, jsonify,
                   request, session, url_for, redirect
                   )
from flaskext.mysql import MySQL
from flask_cors import CORS

from customer import (
    CustomerCalendar,
    CustomerReservation)

app = Flask(__name__)
app.config['SECRET_KEY'] = 'h@kj3s3nG3bakj3s=1jnmijndin9'
app.config['MYSQL_DATABASE_USER'] = 'wesleyvuong@wesleyv'  # Voer de gebruikersnaam in
app.config['MYSQL_DATABASE_PASSWORD'] = '+U8&4d{>,mFE9C}E'  # Voer het wachtwoord in
app.config['MYSQL_DATABASE_DB'] = 'website'  # Geef aan wat de database het is
app.config['MYSQL_DATABASE_HOST'] = 'wesleyv.mysql.database.azure.com'  # Voer hier het IP-adres.
mysql = MySQL(app)

connection = mysql.connect()

CORS(app)
cors = CORS(app, resources={
    r"/*": {
        "origins": "*"
    }
})


@app.route('/', methods=['GET'])
def index():
    if session.get('logged_in'):
        return render_template('index.html')
    else:
        return render_template('index.html', message="Hello!")


@app.route('/login', methods =['GET', 'POST'])
def login():
    msg = ''
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form:
        username = request.form['username']
        password = request.form['password']
        cursor = mysql.connect().cursor()
        cursor.execute('SELECT * FROM accounts WHERE username = % s AND password = % s', (username, password, ))
        account = cursor.fetchone()
        if account:
            msg = 'Logged in successfully !'
            return render_template('profile.html', msg = msg)
        else:
            msg = 'Incorrect username / password !'
    return render_template('login.html', msg = msg)


@app.route('/logout', methods=['GET', 'POST'])
def logout():
    session['logged_in'] = False
    return redirect(url_for('index'))


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
