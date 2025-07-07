import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("Student_Dataset.csv")

# i. Average Project Score per Department
df.groupby("Department")["Project_Score"].mean().plot(kind="bar")
plt.title("Avg Project Score by Dept")
plt.ylabel("Project Score")
plt.show()

# ii. GPA trend for first 50 students
df.head(50).plot(x="Student_ID", y="GPA", kind="line")
plt.title("GPA Trend (First 50)")
plt.ylabel("GPA")
plt.show()

# iii. Proportion of students in each Year
df["Year"].value_counts().plot(kind="pie", autopct="%1.1f%%")
plt.title("Students per Year")
plt.ylabel("")
plt.show()

# iv. Histogram of Attendance
df["Attendance"].plot(kind="hist", bins=10)
plt.title("Attendance Distribution")
plt.xlabel("Attendance")
plt.show()

# v. Scatter plot: GPA vs Project Score
df.plot(kind="scatter", x="GPA", y="Project_Score")
plt.title("GPA vs Project Score")
plt.show()
