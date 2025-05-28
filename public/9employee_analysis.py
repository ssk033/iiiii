import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Load dataset
df = pd.read_csv("Employee.csv")

# 1. Rank employees based on their salary within their department
df['Salary_Rank'] = df.groupby('Department')['Salary'].rank(ascending=False)
print("1. Salary rank within each department:\n", df[['EmployeeID', 'Department', 'Salary', 'Salary_Rank']])

# 2. JoiningYear with the most employees still in the company
most_common_year = df[df['StillInCompany'] == True]['JoiningYear'].value_counts().idxmax()
print(f"\n2. Joining year with most employees still in the company: {most_common_year}")

# 3. Employees above 50 years old and still working
older_employees = df[(df['Age'] > 50) & (df['StillInCompany'] == True)]
print("\n3. Employees above 50 and still working:\n", older_employees)

# 4. Compute average salary increase trend (5% annually since joining)
df['Years_Since_Joining'] = 2025 - df['JoiningYear']
df['Estimated_Current_Salary'] = df['Salary'] * (1.05 ** df['Years_Since_Joining'])
avg_increase = df['Estimated_Current_Salary'].mean() - df['Salary'].mean()
print(f"\n4. Average salary increase over the years: {avg_increase:.2f}")

# 5. Bins of Age and average salary for each bin
df['Age_Bin'] = pd.cut(df['Age'], bins=[20, 30, 40, 50, 60, 70], labels=['20-30', '30-40', '40-50', '50-60', '60-70'])
avg_salary_by_age_bin = df.groupby('Age_Bin')['Salary'].mean()
print("\n5. Average salary by age bin:\n", avg_salary_by_age_bin)

# 6. Pivot table: total employees by JoiningYear and Department
pivot_table = df.pivot_table(index='JoiningYear', columns='Department', values='EmployeeID', aggfunc='count', fill_value=0)
print("\n6. Pivot table of employees by JoiningYear and Department:\n", pivot_table)

# 7. Is remote work more common in a specific department?
remote_work_counts = df[df['RemoteWork'] == True]['Department'].value_counts()
print("\n7. Remote work distribution by department:\n", remote_work_counts)

# 8. Standard deviation of salaries for each department
salary_std = df.groupby('Department')['Salary'].std()
print("\n8. Standard deviation of salaries by department:\n", salary_std)

# 9. Histogram of Performance Score for male employees
male_perf_scores = df[df['Gender'] == 'Male']['PerformanceScore']
plt.figure(figsize=(8, 5))
sns.histplot(male_perf_scores, bins=10, kde=True)
plt.title("Histogram of Performance Score for Male Employees")
plt.xlabel("Performance Score")
plt.ylabel("Count")
plt.grid(True)
plt.tight_layout()
plt.savefig("male_performance_histogram.png")
plt.show()

# 10. Work Hours Per Week vs Chance of Leaving
plt.figure(figsize=(10, 6))
sns.boxplot(data=df, x='StillInCompany', y='WorkHoursPerWeek')
plt.title("Work Hours Per Week vs Still in Company")
plt.xlabel("Still In Company")
plt.ylabel("Work Hours Per Week")
plt.tight_layout()
plt.savefig("work_hours_vs_retention.png")
plt.show()

# Top 5 highest earning employees in each department
top_earners = df.sort_values(by='Salary', ascending=False).groupby('Department').head(5)
print("\n10. Top 5 highest earning employees in each department:\n", top_earners[['EmployeeID', 'Department', 'Salary']])
