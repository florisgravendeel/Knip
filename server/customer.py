import time
import locale
import datetime

class CustomerCalendar(object):
    @staticmethod
    def getOpeningHours():
        # Zet de taal op z'n Hollands
        locale.setlocale(locale.LC_ALL, 'nl_NL')

        days = []
        weekday = (time.strftime("%A"))  # Voorbeeld: maandag
        if weekday == "maandag":
            array = format_dates(get_dates(1, 5))
            days.extend(array)

            array = format_dates(get_dates(8, 12))
            days.extend(array)
        elif weekday == "dinsdag":
            array = format_dates(get_dates(0, 4))
            days.extend(array)

            array = format_dates(get_dates(7, 11))
            days.extend(array)
        elif weekday == "woensdag":
            array = format_dates(get_dates(-1, 3))
            days.extend(array)

            array = format_dates(get_dates(6, 10))
            days.extend(array)
        elif weekday == "donderdag":
            array = format_dates(get_dates(-2, 2))
            days.extend(array)

            array = format_dates(get_dates(5, 9))
            days.extend(array)

        elif weekday == "vrijdag":
            array = format_dates(get_dates(-3, 1))
            days.extend(array)

            array = format_dates(get_dates(4, 8))
            days.extend(array)
        elif weekday == "zaterdag":
            array = format_dates(get_dates(-4, 0))
            days.extend(array)

            array = format_dates(get_dates(3, 7))
            days.extend(array)

        elif weekday == "zondag":
            array = format_dates(get_dates(2, 6))
            days.extend(array)

            array = format_dates(get_dates(9, 13))
            days.extend(array)
        return days

def get_date(i):
    date_original = datetime.datetime.now() # debug: datetime.date(2020, 11, 23)
    ## Days to add
    days_to_add = i

    ## Add
    date_new = date_original + datetime.timedelta(days_to_add)
    return date_new

def get_dates(min, max):
    dates = []
    for x in range(min, max+1):
        dates.append(get_date(x))
    return dates

def format_date(date):
    format_date1 = (date.strftime("%d %B"))
    if format_date1[0] == "0":
        # Haalt de overbodige nullen weg. 05 december -> 5 december
        format_date1 = format_date1[1:len(format_date1)]
    return format_date1

def format_dates(dates):
    output = []
    for date in dates:
        output.append(format_date(date))
    return output