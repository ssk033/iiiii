import pandas as pd

# Load data
df = pd.read_csv("chipotle.csv")

# i. Determine the number of unique orders using the `order_id` column
print("Unique orders:", df["order_id"].nunique())

# ii. Clean the item_price column to convert prices from string to float
df['item_price'] = df['item_price'].replace('[\$,]', '', regex=True).astype(float)

# ii (continued). Calculate average revenue per order
order_total = df.groupby("order_id")["item_price"].sum()
print("Average revenue per order: $", round(order_total.mean(), 2))

# ii (continued). Find how many different items were sold
print("Unique items sold:", df["item_name"].nunique())

# ii (continued). List the top 5 items by total quantity sold
top_items = df.groupby('item_name')['quantity'].sum().sort_values(ascending=False).head(5)
print("Top 5 items by quantity sold:\n", top_items)

# iii. Count the number of unique values in the `choice_description` column
print("Unique choice descriptions:", df["choice_description"].nunique())

# iv. Identify the order with the highest total bill amount
max_order = order_total.idxmax()
max_value = order_total.max()
print(f"Order ID with highest bill: {max_order} ($ {max_value:.2f})")
