import pandas as pd

# ---------------------------
# a. Create DataFrame from dictionary
# ---------------------------
passenger_data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [28, 34, 19],
    'Fare': [72.50, 53.10, 20.75]
}
df_passengers = pd.DataFrame(passenger_data)
print("a. Passenger DataFrame:")
print(df_passengers)

# ---------------------------
# b. Titanic Dataset Operations
# ---------------------------

# 1. Read titanic.csv and display first few rows
titanic_df = pd.read_csv("titanic.csv")
print("\nb1. First 5 rows:")
print(titanic_df.head())

# 2. Filter rows where Age > 30
print("\nb2. Passengers with Age > 30:")
print(titanic_df[titanic_df['Age'] > 30])

# 3. Replace missing Age values with 30
print("\nb3. Fill missing Age with 30:")
titanic_df_filled = titanic_df.fillna({'Age': 30})
print(titanic_df_filled)

# 4. Remove rows with any missing values
print("\nb4. Drop rows with any missing values:")
print(titanic_df.dropna())

# 5. Display max and min Age values
print(f"\nb5. Max Age: {titanic_df['Age'].max()}")
print(f"    Min Age: {titanic_df['Age'].min()}")
