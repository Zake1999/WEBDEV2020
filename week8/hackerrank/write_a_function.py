def is_leap(year):
    leap = False

    if year % 4 or year % 100 == 0 and year % 400:
        leap = False
    else:
        leap = True
    return leap


year = int(input())
print(is_leap(year))