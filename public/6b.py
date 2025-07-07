import pandas as pd
df = pd.read_csv("Student_Dataset.csv")

# i. Convert to category type
df["Department"] = df["Department"].astype("category")
df["Internship_Completed"] = df["Internship_Completed"].astype("category")
df["Year"] = df["Year"].astype("category")

# ii. Create Performance Category
def performance(g):
    if g >= 8.5: return 'Excellent'
    elif g >= 7: return 'Good'
    elif g >= 5: return 'Average'
    else: return 'Poor'
df["perf_cat"] = df["GPA"].apply(performance)

# iii. Avg GPA and Project Score per Dept
print(df.groupby("Department")[["GPA", "Project_Score"]].mean())

# iv. Count by Internship and Year
print(df.groupby(['Internship_Completed', 'Year']).size())
