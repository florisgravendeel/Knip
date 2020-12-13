import time
import locale
import datetime
from datetime import date, timedelta

from flask import jsonify


#
# Deze klasse bevat allen functies die nodig zijn om de kalender voor de klant
# op onze website werkende te krijgen.
#
class CustomerCalendar(object):

    # Deze functie geeft een 'dictionary' met daarin de openingstijden van deze week en volgende week.
    # Er zijn twee formaten:
    #   sql_date_format  ["21/12/20", "22/12/20"]
    #   day_month_format ["24 november", "25 november"]
    @staticmethod
    def get_opening_hours():
        # Zet de taal op z'n Hollands
        locale.setlocale(locale.LC_ALL, 'nl_NL')

        day_month_array = []
        sql_date_array = []
        weekday = (time.strftime("%A"))  # Voorbeeld: maandag
        if weekday == "maandag":
            dates = get_dates(1, 5)
            day_month_array = format_to_day_month_list(dates)
            sql_date_array = format_to_sql_date_list(dates)

            dates = get_dates(8, 12)
            day_month_array.extend(format_to_day_month_list(dates))
            sql_date_array.extend(format_to_sql_date_list(dates))
        elif weekday == "dinsdag":
            dates = get_dates(0, 4)
            day_month_array = format_to_day_month_list(dates)
            sql_date_array = format_to_sql_date_list(dates)

            dates = get_dates(7, 11)
            day_month_array.extend(format_to_day_month_list(dates))
            sql_date_array.extend(format_to_sql_date_list(dates))
        elif weekday == "woensdag":
            dates = get_dates(-1, 3)

            day_month_array = format_to_day_month_list(dates)
            sql_date_array = format_to_sql_date_list(dates)

            dates = get_dates(6, 10)
            day_month_array.extend(format_to_day_month_list(dates))
            sql_date_array.extend(format_to_sql_date_list(dates))
        elif weekday == "donderdag":
            dates = get_dates(-2, 2)

            day_month_array = format_to_day_month_list(dates)
            sql_date_array = format_to_sql_date_list(dates)

            dates = get_dates(5, 9)
            day_month_array.extend(format_to_day_month_list(dates))
            sql_date_array.extend(format_to_sql_date_list(dates))

        elif weekday == "vrijdag":
            dates = get_dates(-3, 1)

            day_month_array = format_to_day_month_list(dates)
            sql_date_array = format_to_sql_date_list(dates)

            dates = get_dates(4, 8)
            day_month_array.extend(format_to_day_month_list(dates))
            sql_date_array.extend(format_to_sql_date_list(dates))
        elif weekday == "zaterdag":
            dates = get_dates(-4, 0)
            day_month_array = format_to_day_month_list(dates)
            sql_date_array = format_to_sql_date_list(dates)

            dates = get_dates(3, 7)
            day_month_array.extend(format_to_day_month_list(dates))
            sql_date_array.extend(format_to_sql_date_list(dates))

        elif weekday == "zondag":
            dates = get_dates(2, 6)
            day_month_array = format_to_day_month_list(dates)
            sql_date_array = format_to_sql_date_list(dates)

            dates = get_dates(9, 13)
            day_month_array.extend(format_to_day_month_list(dates))
            sql_date_array.extend(format_to_sql_date_list(dates))

        calender_dict = {"day_month_format": day_month_array, "sql_date_format": sql_date_array}
        return calender_dict


# Deze functie geeft een String met daarin de naam van de week in Nederlands formaat.
# i staat voor het aantal dagen voor of na.
# Voorbeeld: -1 is gisteren, +2 overmorgen.
def get_date(i):
    date_original = datetime.datetime.now()  # debug: datetime.date(2020, 11, 23)
    days_to_add = i

    ## De huidige dag plus of min i = nieuwe dag
    date_new = date_original + datetime.timedelta(days_to_add)
    return date_new


# Deze functie geeft een lijst dagen in Nederlands formaat.
# De functie telt vanaf: min, en stopt vanaf: max.
def get_dates(min, max):
    dates = []
    for x in range(min, max + 1):
        dates.append(get_date(x))
    return dates


# Deze functie formateerd de datum in een SQL formaat.
def format_to_sql_date(date):
    format_date1 = (date.strftime("%Y/%m/%d"))  # (date.strftime("%x"))
    return format_date1


# Deze functie formateerd de datums in een SQL formaat en geeft ze terug in een lijst.
def format_to_sql_date_list(dates):
    output = []
    for date in dates:
        output.append(format_to_sql_date(date))
    return output


# Deze functie formateerd een datum naar een dag/maand formaat. (11/12/2020 -> 11 december)
def format_to_day_month(date):
    format_date1 = (date.strftime("%d %B"))
    if format_date1[0] == "0":
        # Haalt de overbodige nullen weg. 05 december -> 5 december
        format_date1 = format_date1[1:len(format_date1)]
    return format_date1


# Deze functie formateerd een lijst de datums en geeft een lijst in dag/maand formaat.
def format_to_day_month_list(dates):
    output = []
    for date in dates:
        output.append(format_to_day_month(date))
    return output


#
# Deze klasse bevat functies waarmee we allen gemaakte reserveringen kunnen ophalen, verwerken en versturen.
#
class CustomerReservation(object):

    # Deze functie weergeeft allen reserveringen van deze week en volgende week.
    # l1: reserveringen deze week & l2: reserveringen volgende week
    @staticmethod
    def get_appointments(connection):
        dates_dictionary = CustomerCalendar.get_opening_hours()['sql_date_format']
        start_date = dates_dictionary[0]
        end_date = dates_dictionary[9]
        end_date = CustomerReservation.add_one_day(end_date)

        cursor = connection.cursor()
        cursor.execute(
            "SELECT date_format(begin_datum, '%d-%m-%Y %H:%i:%S') as begin_datum, date_format(eind_datum,'%d-%m-%Y %H:%i:%S') as eind_datum,kapper_id FROM website.reservering WHERE begin_datum between '" + start_date + "' and '" + end_date + "';")
        object_array = [dict((cursor.description[i][0], value) for i, value in enumerate(row)) for row in
                        cursor.fetchall()]
        cursor.close()
        l1 = []
        l2 = []
        for obj in object_array:
            appointment = Appointment(obj, start_date, end_date)
            if appointment.is_in_first_week():
                l1 += appointment.get_location()
            else:
                l2 += appointment.get_location()
        return jsonify({'reserveringen': [l1, l2]})

    # Deze functie maakt op basis van de json data een reservering aan in de database.
    @staticmethod
    def create_appointment(connection, json_data):
        cursor = connection.cursor()
        naam = json_data['naam']
        email = json_data['email']
        telefoon = json_data['telefoon']
        begin_datum = json_data['begin_datum']
        eind_datum = json_data['eind_datum']
        kapper_id = json_data['kapper_id']
        behandeling_id = json_data['behandelings_id']
        opmerking = json_data['opmerking']

        query = "INSERT INTO website.reservering (`naam`, `email`, `telefoon`, `begin_datum`, `eind_datum`, `kapper_id`, `behandelings_id`, `opmerking`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s);"
        args = (naam, email, telefoon, begin_datum, eind_datum, kapper_id, behandeling_id, opmerking)

        cursor.execute(query, args)
        connection.commit()
        cursor.close()
        return "Successfully committed"

    # Deze functie voegt 1 dag toe aan de datum in een string-formaat.
    # Input: '2020/12/24', Output: '2020/12/25'
    @staticmethod
    def add_one_day(string):
        date = string.split("/")
        year = int(date[0])
        month = int(date[1])
        day = int(date[2])
        output = str(datetime.datetime(year, month, day) + timedelta(days=1))
        output = output.replace("-", "/").split(" ")[0]
        return output

    # Deze functie weergeeft alle behandelingen in json-formaat. (id, name, price)
    @staticmethod
    def get_treatments(connection):
        cur = connection.cursor()
        cur.execute("select * from website.behandeling;")
        r = [dict((cur.description[i][0], value) for i, value in enumerate(row)) for row in cur.fetchall()]
        cur.close()
        return jsonify({'behandelingen': r})


# Deze klasse representeerd een tijdvak in een agenda. Dit tijdvak kan een half uur of een uur zijn.
# Het tijdvak kent een begintijd en eindtijd.
class Appointment:
    timetable = ["9:00 -  9:30", "9:30 - 10:00",
                 "10:00 - 10:30", "10:30 - 11:00",
                 "11:00 - 11:30", "11:30 - 12:00",
                 "12:00 - 12:30", "12:30 - 13:00",
                 "13:00 - 13:30", "13:30 - 14:00",
                 "14:00 - 14:30", "14:30 - 15:00",
                 "15:00 - 15:30", "15:30 - 16:00",
                 "16:00 - 16:30", "16:30 - 17:00"]

    timetable2 = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30",
                  "12:00", "12:30", "13:00", "13:30", "14:00",
                  "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"]

    tuesday = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]
    wednesday = [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56, 61, 66, 71, 76]
    thursday = [2, 7, 12, 17, 22, 27, 32, 37, 42, 47, 52, 57, 62, 67, 72, 77]
    friday = [3, 8, 13, 18, 23, 28, 33, 38, 43, 48, 53, 58, 63, 68, 73, 78]
    saturday = [4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59, 64, 69, 74, 79]

    def __init__(self, data, c_start_date, c_end_date):

        self.appointment_start_time = Period(data['begin_datum'])
        self.appointment_end_time = Period(data['eind_datum'])

        self.calendar_start_date = self.string_to_date(c_start_date)
        self.calendar_end_date = self.string_to_date(c_end_date)

    # Deze functie geeft aan of het tijdvak in de eerste gegeven week is of in de tweede.
    def is_in_first_week(self):
        date_z = self.appointment_start_time.date
        date_x = self.calendar_start_date
        date_y = self.calendar_end_date

        a = date_x - date_z
        b = date_z - date_y
        minimal = min(a.days, b.days)
        if minimal == a.days:
            return False
        else:
            return True

    # Deze functie geeft aan of het tijdvak een half uur duurt.
    def is_half_hour(self):
        total_minutes = self.appointment_end_time.time_to_minutes() - self.appointment_start_time.time_to_minutes()
        if total_minutes <= 30:
            return True
        else:
            return False

    # Deze functie geeft het id van cell aan in de agenda.
    # Mocht het zo zijn dat het tijdvak een uur duurt, dan zijn er 2 cell id's
    def get_location(self):
        x = 0
        appointment = self.appointment_start_time.get_time() + " - " + self.appointment_end_time.get_time()

        if self.is_half_hour():
            for index in range(len(self.timetable)):
                if appointment == self.timetable[index]:
                    x = index
                    break
            weekday = self.appointment_start_time.date.weekday()
            if weekday == 0:  # maandag
                pass
            elif weekday == 1:  # dinsdag
                return [self.tuesday[x]]
            elif weekday == 2:  # woensdag
                return [self.wednesday[x]]
            elif weekday == 3:  # donderdag
                return [self.thursday[x]]
            elif weekday == 4:  # vrijdag
                return [self.friday[x]]
            elif weekday == 5:  # zaterdag
                return [self.saturday[x]]
            elif weekday == 6:  # zondag
                pass
        else:
            end_date = ""
            start_date = appointment.split(" - ")[0]
            for index in range(len(self.timetable2)):
                if start_date == self.timetable2[index]:
                    end_date = self.timetable2[index + 1]
                    break
            full_date = start_date + " - " + end_date

            for index in range(len(self.timetable)):
                if full_date == self.timetable[index]:
                    x = index
                    break
            weekday = self.appointment_start_time.date.weekday()
            if weekday == 0:  # maandag
                pass
            elif weekday == 1:  # dinsdag
                return [self.tuesday[x], self.tuesday[x + 1]]
            elif weekday == 2:  # woensdag
                return [self.wednesday[x], self.wednesday[x + 1]]
            elif weekday == 3:  # donderdag
                return [self.thursday[x], self.thursday[x + 1]]
            elif weekday == 4:  # vrijdag
                return [self.friday[x], self.friday[x + 1]]
            elif weekday == 5:  # zaterdag
                return [self.saturday[x], self.saturday[x + 1]]
            elif weekday == 6:  # zondag
                pass

    # Deze functie zet een datum om in een date-object.
    def string_to_date(self, string):
        string_array = string.split("/")
        day = int(string_array[2])
        month = int(string_array[1])
        year = int(string_array[0])
        return date(year, month, day)


# Deze functie representeerd een cell in de agenda. Deze duurt altijd een half uur.
# Een reservering kan echter wel bestaan uit meerdere cellen.
class Period:

    def __init__(self, string):
        str_array = string.split(" ")
        date_array = str_array[0].split("-")
        time_array = str_array[1].split(":")
        self.date = date(int(date_array[2]), int(date_array[1]), int(date_array[0]))
        self.hours = int(time_array[0])
        self.minutes = int(time_array[1])

    def time_to_minutes(self):
        return self.hours * 60 + self.minutes

    def get_time(self):
        if self.minutes == 0:
            return str(self.hours) + ":00"
        else:
            return str(self.hours) + ":" + str(self.minutes)
