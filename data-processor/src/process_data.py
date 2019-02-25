import csv
from pprint import pprint
import re

users = {}
for row in csv.DictReader(open('Replit Data - Sheet1.csv', newline=''), delimiter=','):
    # Remove testing data
    if 'dshflksdjf' in row['code'] or \
       'lksdjfklds' in row['code'] or \
       'Mon Feb 04' in row['timestamp'] or \
       'Fri Feb 02' in row['timestamp'] or \
       'undefined'  in row['userid']:
        continue

    # Map each student through time
    if row['userid'] not in users:
        users[row['userid']] = [row]
    else:
        users[row['userid']].append(row)


for user, submissions in users.items():
    for submission in submissions:
        print(re.findall('input(\([a-zA-Z0-9.]+\))', submission['code']))
