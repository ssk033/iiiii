import pandas as pd

# --------------------------------------------------------
# Part i: Read Titanic dataset and display first few rows
# --------------------------------------------------------
df = pd.read_csv("titanic.csv")
print("First 5 rows of the Titanic dataset:")
print(df.head())

# --------------------------------------------------------
# Part ii: Filter rows where Age > 30
# --------------------------------------------------------
age_filtered = df[df["Age"] > 30]
print("\nPassengers with age > 30:")
print(age_filtered)

# --------------------------------------------------------
# Part iii: Replace missing Age values with 30
# --------------------------------------------------------
df["Age"].fillna(30, inplace=True)
print("\nFirst 10 rows after filling missing Age values with 30:")
print(df.head(10))

# --------------------------------------------------------
# Part iv: Remove rows with any missing values
# --------------------------------------------------------
cleaned_df = df.dropna()
print("\nFirst 10 rows of cleaned DataFrame (no missing values):")
print(cleaned_df.head(10))
