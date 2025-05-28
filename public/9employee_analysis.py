import pandas as pd
import matplotlib.pyplot as plt

# 1 - Load the CSV data
df = pd.read_csv("./employee.csv")

# 2 - Rank employees based on salary within their department
df["SalaryRank"] = df.groupby("Department")["Salary"].rank(method="dense", ascending=False)
df["SalaryRank"]

# 3 - JoiningYear with most employees still in the company
df[df["LeftCompany"] == 0]["JoiningYear"].value_counts().idxmax()

# 4 - Employees above 50 years old and still working
df[(df["Age"] > 50) & (df["LeftCompany"] == 0)]

# 5 - Estimated 2025 salary with 5% annual growth
df["Years"] = 2025 - df["JoiningYear"]
df["Estimated2025Salary"] = df["Salary"] * (1.05 ** df["Years"])
print("Average Estimated 2025 Salary by Department (5% Annual Growth):")
df.groupby("Department")["Estimated2025Salary"].mean()

# 6 - Age group binning and average salary per age group
df["AgeGroup"] = pd.cut(
    df["Age"],
    bins=[20, 30, 40, 50, 60],
    labels=["20 - 30", "30 - 40", "40 - 50", "50 - 60"]
)
df.groupby("AgeGroup")["Salary"].mean()

# 7 - Pivot table: total number of employees by JoiningYear and Department
df.pivot_table("EmployeeID", index="JoiningYear", columns="Department", aggfunc="count")

# 8 - Department with most remote work
df.groupby("Department")["RemoteWork"].mean().idxmax()

# 9 - Standard deviation of salary by department
df.groupby("Department")["Salary"].std()

# 10 - Histogram: Performance Score distribution for male employees
df[df["Gender"] == "Male"]["PerformanceScore"].hist()
plt.title("PerformanceScore for Male employees")
plt.xlabel("PerformanceScore")
plt.ylabel("Frequency")
plt.show()

# 11 - Correlation between work hours and chance of leaving the company
df[["WorkHoursPerWeek", "LeftCompany"]].corr()

# 12 - Top 5 highest earning employees in each department
df.groupby("Department").apply(lambda x: x.nlargest(5, "Salary"))
