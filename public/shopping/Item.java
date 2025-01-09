package shopping;

public class Item implements Product {
    protected String productId;
    protected String productName;
    protected double price;

    public Item(String productId, String productName, double price) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
    }

    @Override
    public double getPrice() {
        return price;
    }

    @Override
    public String getDetails() {
        return "Product ID: " + productId + ", Name: " + productName + ", Price: $" + price;
    }

    @Override
    public void printDetails() {
        System.out.println(getDetails());
    }
}
