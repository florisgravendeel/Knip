import time
import locale
import datetime


class CustomerCalendar(object):

    # sql_date_format 21/12/20
    # day_month_format 24 november
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


def get_date(i):
    date_original = datetime.datetime.now()  # debug: datetime.date(2020, 11, 23)
    ## Days to add
    days_to_add = i

    ## Add
    date_new = date_original + datetime.timedelta(days_to_add)
    return date_new


def get_dates(min, max):
    dates = []
    for x in range(min, max + 1):
        dates.append(get_date(x))
    return dates


def format_to_sql_date(date):
    format_date1 = (date.strftime("%Y/%m/%d"))  # (date.strftime("%x"))
    return format_date1


def format_to_sql_date_list(dates):
    output = []
    for date in dates:
        output.append(format_to_sql_date(date))
    return output


def format_to_day_month(date):
    format_date1 = (date.strftime("%d %B"))
    if format_date1[0] == "0":
        # Haalt de overbodige nullen weg. 05 december -> 5 december
        format_date1 = format_date1[1:len(format_date1)]
    return format_date1


def format_to_day_month_list(dates):
    output = []
    for date in dates:
        output.append(format_to_day_month(date))
    return output


class CustomerReservation(object):
    timetable = ["9:00 -  9:30", "9:30 - 10:00",
                 "10:00 - 10:30", "10:30 - 11:00",
                 "11:00 - 11:30", "11:30 - 12:00",
                 "12:00 - 12:30", "12:30 - 13:00",
                 "13:00 - 13:30", "13:30 - 14:00",
                 "14:00 - 14:30", "14:30 - 15:00",
                 "15:00 - 15:30", "15:30 - 16:00",
                 "16:00 - 16:30", "16:30 - 17:00"]

    @staticmethod
    def get_appointments(afspraken, kappers):
        reservering = {
            ""
        }
        # kapper id
        # kapper naam
        # lijst reserveringen
        return 1

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