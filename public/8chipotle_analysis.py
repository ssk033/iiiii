import pandas as pd

# Load dataset and clean item_price column
df = pd.read_csv("chipotle.csv")
df['item_price'] = df['item_price'].str.replace('$', '', regex=False).astype(float)

# 1. Unique orders count
print("1. Number of unique orders:", df['order_id'].nunique())

# 2. Average revenue per order
order_revenue = df.groupby('order_id')['item_price'].sum()
print(f"\n2. Average revenue per order: ${order_revenue.mean():.2f}")

# 3. Number of different items sold
print("\n3. Number of different items sold:", df['item_name'].nunique())

# 3a. Top 5 items by quantity sold
print("\n3a. Top 5 items by total quantity sold:")
print(df.groupby('item_name')['quantity'].sum().sort_values(ascending=False).head(5))

# 4. Unique choice descriptions count
print("\n4. Number of unique choice descriptions:", df['choice_description'].nunique())

# 5. Order with highest bill
max_order = order_revenue.idxmax()
print(f"\n5. Order with highest bill: ID {max_order}, Amount: ${order_revenue[max_order]:.2f}")

# 6. Items with inconsistent pricing
price_counts = df.groupby('item_name')['item_price'].nunique()
print("\n6. Items with inconsistent pricing:")
print(price_counts[price_counts > 1])

# 7. Orders with any item quantity > 5
print("\n7. Orders with item quantity > 5:")
print(df[df['quantity'] > 5][['order_id', 'item_name', 'quantity']])

# 8. Average unit price of items
df['unit_price'] = df['item_price'] / df['quantity']
print(f"\n8. Average unit price of an item: ${df['unit_price'].mean():.2f}")

# 9. Unique prices and their items
print("\n9. Unique item prices and associated items:")
for price, items in df.groupby('unit_price')['item_name'].unique().items():
    print(f"${price:.2f}: {', '.join(set(items))}")

# 10. Orders including 'Canned Soda'
print("\n10. Orders including Canned Soda:")
print(df[df['item_name'].str.contains('Canned Soda', case=False)][['order_id', 'item_name', 'quantity', 'item_price']])
