package shopping;

public class Clothing extends Item {
    private String size;
    private String material;

    public Clothing(String productId, String productName, double price, String size, String material) {
        super(productId, productName, price);
        this.size = size;
        this.material = material;
    }

    @Override
    public String getDetails() {
        return super.getDetails() + ", Size: " + size + ", Material: " + material;
    }
}
