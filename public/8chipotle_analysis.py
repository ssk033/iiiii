import pandas as pd

# Load dataset
df = pd.read_csv("chipotle.csv")

# Clean item_price column: remove $ and convert to float
df['item_price'] = df['item_price'].replace('[\$,]', '', regex=True).astype(float)

# 1. Number of unique orders
unique_orders = df['order_id'].nunique()
print(f"1. Number of unique orders: {unique_orders}")

# 2. Average revenue per order
order_totals = df.groupby('order_id')['item_price'].sum()
avg_revenue = order_totals.mean()
print(f"\n2. Average revenue per order: ${avg_revenue:.2f}")

# 3. Number of different items sold
unique_items = df['item_name'].nunique()
print(f"\n3. Number of different items sold: {unique_items}")

# 3a. Top 5 items by total quantity sold
top_5_items = df.groupby('item_name')['quantity'].sum().sort_values(ascending=False).head(5)
print("\n3a. Top 5 items by total quantity sold:")
print(top_5_items)

# 4. Unique values in choice_description
unique_choices = df['choice_description'].nunique()
print(f"\n4. Number of unique choice descriptions: {unique_choices}")

# 5. Order with the highest total bill
order_totals = df.groupby('order_id')['item_price'].sum()
max_order_id = order_totals.idxmax()
max_order_value = order_totals.max()
print(f"\n5. Order with the highest bill: Order ID {max_order_id}, Amount: ${max_order_value:.2f}")

# 6. Items with inconsistent pricing
price_variations = df.groupby('item_name')['item_price'].nunique()
inconsistent_items = price_variations[price_variations > 1]
print("\n6. Items with inconsistent pricing:")
print(inconsistent_items)

# 7. Orders where any single item was ordered in quantity > 5
bulk_orders = df[df['quantity'] > 5]
print("\n7. Orders with items ordered in quantity > 5:")
print(bulk_orders[['order_id', 'item_name', 'quantity']])

# 8. Average price of an item (unit price)
df['unit_price'] = df['item_price'] / df['quantity']
avg_price = df['unit_price'].mean()
print(f"\n8. Average unit price of an item: ${avg_price:.2f}")

# 9. Unique item prices and associated items
unique_prices = df.groupby('unit_price')['item_name'].unique()
print("\n9. Unique item prices and associated items:")
for price, items in unique_prices.items():
    print(f"${price:.2f} -> {', '.join(set(items))}")

# 10. Orders that included Canned Soda
canned_soda_orders = df[df['item_name'].str.contains('Canned Soda', case=False)]
print("\n10. Orders that included Canned Soda:")
print(canned_soda_orders[['order_id', 'item_name', 'quantity', 'item_price']])
