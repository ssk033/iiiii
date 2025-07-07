# -----------------------------------------------------------------------
# Part i: Reading CSV file row by row
import csv

with open("data.csv") as f:
    for row in csv.reader(f):
        print(row)


# -----------------------------------------------------------------------
# Part ii: Writing list of data to CSV and reading it back

import csv

data = [{"name": "Alice", "age": 25}, {"name": "Bob", "age": 30}]
with open("output.csv", "w", newline='') as f:
    writer = csv.DictWriter(f, fieldnames=["name", "age"])
    writer.writeheader()
    writer.writerows(data)
