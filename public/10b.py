import pandas as pd
df = pd.read_csv("titanic.csv")

# i. Max and Min Age
print(df["Age"].max())
print(df["Age"].min())

# ii. Left join with discount info
discount = pd.DataFrame({'PassengerId': df['PassengerId'], 'Discount': df['Fare'] * 0.1})
merged = df.merge(discount, on='PassengerId', how='left')
print(merged.head())

# iii. Remove duplicates
print("Duplicates removed:", df.duplicated().sum())
df = df.drop_duplicates()

# iv. Save cleaned data
df.to_excel("titanic_cleaned.xlsx", index=False)
