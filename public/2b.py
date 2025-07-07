import pandas as pd

df = pd.read_csv("employee.csv")

# i. Rank by salary within department
df['SalaryRank'] = df.groupby('Department')['Salary'].rank(ascending=False)

# ii. Joining year with most still-working employees
print(df[df['LeftCompany'] == 0]['JoiningYear'].mode()[0])

# iii. Employees over 50 and still working
print(df[(df['Age'] > 50) & (df['LeftCompany'] == 0)])

# iv. Salary increase trend assuming 5% annually since joining
df['ProjectedSalary2025'] = df['Salary'] * (1.05 ** (2025 - df['JoiningYear']))

# v. Age bins and average salary in each
bins = [20, 30, 40, 50, 60, 70]
df['AgeGroup'] = pd.cut(df['Age'], bins)
print(df.groupby('AgeGroup')['Salary'].mean())
