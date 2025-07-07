import pandas as pd
df = pd.read_csv("chipotle.csv")

# i. Inconsistent pricing
incon = df.groupby("item_name")["item_price"].nunique()
print(incon[incon > 1])

# ii. Convert item_price to float
df["item_price"] = df["item_price"].replace('[\$,]', '', regex=True).astype(float)

# iii. Average price per item
print(df.groupby("item_name")["item_price"].mean())

# iv. Unique prices and associated items
print(df.groupby("item_price")["item_name"].unique())

# v. Orders with canned soda
print(df[df["item_name"].str.contains("canned soda", case=False)])
