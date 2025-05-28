import pandas as pd

# ---------------------------
# a. Create DataFrame from a Dictionary
# ---------------------------
passenger_data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [28, 34, 19],
    'Fare': [72.50, 53.10, 20.75]
}

df_passengers = pd.DataFrame(passenger_data)
print("a. Passenger Data Frame from Dictionary:")
print(df_passengers)

# ---------------------------
# b. Titanic Dataset Operations
# ---------------------------

# 1. Read titanic.csv and display first few rows
titanic_df = pd.read_csv("titanic.csv")
print("\nb1. First few rows of Titanic dataset:")
print(titanic_df.head())

# 2. Filter rows where age > 30
filtered_df = titanic_df[titanic_df['Age'] > 30]
print("\nb2. Passengers with Age > 30:")
print(filtered_df)

# 3. Replace missing age values with 30
titanic_df_filled = titanic_df.copy()
titanic_df_filled['Age'].fillna(30, inplace=True)
print("\nb3. Titanic DataFrame with missing 'Age' values replaced by 30:")
print(titanic_df_filled)

# 4. Remove rows with any missing values
titanic_df_cleaned = titanic_df.dropna()
print("\nb4. Titanic DataFrame with missing rows removed:")
print(titanic_df_cleaned)

# 5. Max and Min values of Age column
max_age = titanic_df['Age'].max()
min_age = titanic_df['Age'].min()
print(f"\nb5. Max Age: {max_age}")
print(f"    Min Age: {min_age}")
