import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("employee.csv")

# i. Pivot table
print(pd.pivot_table(df, index="JoiningYear", columns="Department", values="EmployeeID", aggfunc="count"))

# ii. Remote work count by department
print(df.groupby("Department")["RemoteWork"].sum())

# iii. Salary std deviation by department
print(df.groupby("Department")["Salary"].std())

# iv. Histogram of performance score (Male)
df[df["Gender"] == "Male"]["PerformanceScore"].plot(kind="hist")
plt.show()

# v. Top 5 highest earners per department
print(df.sort_values(by="Salary", ascending=False).groupby("Department").head(5))
