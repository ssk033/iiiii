package shopping;

public class Electronics extends Item {
    private String brand;
    private int warranty;

    public Electronics(String productId, String productName, double price, String brand, int warranty) {
        super(productId, productName, price);
        this.brand = brand;
        this.warranty = warranty;
    }

    @Override
    public String getDetails() {
        return super.getDetails() + ", Brand: " + brand + ", Warranty: " + warranty + " months";
    }
}
