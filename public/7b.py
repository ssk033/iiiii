import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("Student_Dataset.csv")

# i. Project Score vs Internship
sns.boxplot(data=df, x="Internship_Completed", y="Project_Score")
plt.title("Project Score by Internship")
plt.show()

# ii. Create Performance Category
def performance(gpa):
    if gpa >= 8.5: return 'Excellent'
    elif gpa >= 7: return 'Good'
    elif gpa >= 5: return 'Average'
    else: return 'Poor'
df["perf_cat"] = df["GPA"].apply(performance)

# iii. Count plot of Performance Category
sns.countplot(data=df, x="perf_cat")
plt.title("Performance Count")
plt.show()

# iv. Heatmap of correlations
sns.heatmap(df[["GPA", "Attendance", "Project_Score"]].corr(), annot=True)
plt.title("Correlation Heatmap")
plt.show()

# v. Pairplot color-coded by Year
sns.pairplot(df[["GPA", "Attendance", "Project_Score", "Year"]], hue="Year")
plt.show()
