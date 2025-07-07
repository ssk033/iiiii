import pandas as pd
df = pd.read_csv("Student_Dataset.csv")

# i. Print missing values in each column
print(df.isnull().sum())

# ii. Drop duplicate rows and reset index
df = df.drop_duplicates().reset_index(drop=True)

# iii. Find rows where GPA is out of valid range
print(df[(df["GPA"] > 10) | (df["GPA"] < 0)])

# iv. Replace GPA outliers with NaN
df.loc[(df["GPA"] > 10) | (df["GPA"] < 0), "GPA"] = pd.NA

# Fill NaN in GPA with mean of valid GPAs
df["GPA"] = df["GPA"].astype(float).fillna(df["GPA"].mean())

# Print cleaned GPA values
print(df["GPA"])
