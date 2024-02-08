import csv

f1 = 'LL84.csv'
f2 = 'LL87.csv'
f3 = 'LL97.csv'

for files in [f1, f2, f3]:
    with open(files, 'r') as f:
        f_reader = csv.reader(f)
        fields = next(f_reader)

        print(f"fields in {files} csv are: ")
        print(', '.join(fields))