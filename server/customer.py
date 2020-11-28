import time
import locale
import datetime

class CustomerCalendar(object):

    # full_date_format 21/12/20
    # day_month_format 24 november
    @staticmethod
    def getOpeningHours():
        # Zet de taal op z'n Hollands
        locale.setlocale(locale.LC_ALL, 'nl_NL')

        day_month_array = []
        full_date_array = []
        weekday = (time.strftime("%A"))  # Voorbeeld: maandag
        if weekday == "maandag":
            dates = get_dates(1, 5)
            day_month_array = format_to_day_month_list(dates)
            full_date_array = format_to_full_date_list(dates)

            dates = get_dates(8, 12)
            day_month_array.extend(format_to_day_month_list(dates))
            full_date_array.extend(format_to_full_date_list(dates))
        elif weekday == "dinsdag":
            dates = get_dates(0, 4)
            day_month_array = format_to_day_month_list(dates)
            full_date_array = format_to_full_date_list(dates)

            dates = get_dates(7, 11)
            day_month_array.extend(format_to_day_month_list(dates))
            full_date_array.extend(format_to_full_date_list(dates))
        elif weekday == "woensdag":
            dates = get_dates(-1, 3)

            day_month_array = format_to_day_month_list(dates)
            full_date_array = format_to_full_date_list(dates)

            dates = get_dates(6, 10)
            day_month_array.extend(format_to_day_month_list(dates))
            full_date_array.extend(format_to_full_date_list(dates))
        elif weekday == "donderdag":
            dates = get_dates(-2, 2)

            day_month_array = format_to_day_month_list(dates)
            full_date_array = format_to_full_date_list(dates)

            dates = get_dates(5, 9)
            day_month_array.extend(format_to_day_month_list(dates))
            full_date_array.extend(format_to_full_date_list(dates))

        elif weekday == "vrijdag":
            dates = get_dates(-3, 1)

            day_month_array = format_to_day_month_list(dates)
            full_date_array = format_to_full_date_list(dates)

            dates = get_dates(4, 8)
            day_month_array.extend(format_to_day_month_list(dates))
            full_date_array.extend(format_to_full_date_list(dates))
        elif weekday == "zaterdag":
            dates = get_dates(-4, 0)
            day_month_array = format_to_day_month_list(dates)
            full_date_array = format_to_full_date_list(dates)

            dates = get_dates(3, 7)
            day_month_array.extend(format_to_day_month_list(dates))
            full_date_array.extend(format_to_full_date_list(dates))

        elif weekday == "zondag":
            dates = get_dates(2, 6)
            day_month_array = format_to_day_month_list(dates)
            full_date_array = format_to_full_date_list(dates)

            dates = get_dates(9, 13)
            day_month_array.extend(format_to_day_month_list(dates))
            full_date_array.extend(format_to_full_date_list(dates))

        calender_dict = {"day_month_format": day_month_array, "full_date_format": full_date_array}
        return calender_dict

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

def format_to_full_date(date):
    format_date1 = (date.strftime("%d/%m/%y"))  #(date.strftime("%x"))
    return format_date1

def format_to_full_date_list(dates):
    output = []
    for date in dates:
        output.append(format_to_full_date(date))
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