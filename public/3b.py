import pandas as pd

# Load data
df = pd.read_csv("chipotle.csv")

# 1. Unique orders
print("Unique orders:", df["order_id"].nunique())

# 2. Clean item_price column
df['item_price'] = df['item_price'].replace('[\$,]', '', regex=True).astype(float)

# 3. Average revenue per order
order_total = df.groupby("order_id")["item_price"].sum()
print("Average revenue per order: $", round(order_total.mean(), 2))

# 4. Number of unique items sold
print("Unique items sold:", df["item_name"].nunique())

# 5. Top 5 items by quantity sold
top_items = df.groupby('item_name')['quantity'].sum().sort_values(ascending=False).head(5)
print("Top 5 items by quantity sold:\n", top_items)

# 6. Unique choice descriptions
print("Unique choice descriptions:", df["choice_description"].nunique())

# 7. Order with highest total bill
max_order = order_total.idxmax()
max_value = order_total.max()
print(f"Order ID with highest bill: {max_order} ($ {max_value:.2f})")
