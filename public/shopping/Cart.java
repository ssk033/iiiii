package shopping;

import java.util.ArrayList;
import java.util.List;

public class Cart {
    private List<Product> products;

    public Cart() {
        this.products = new ArrayList<>();
    }

    public void addProduct(Product product, boolean inStock) throws ProductNotAvailableException, InvalidProductException {
        if (product == null) {
            throw new InvalidProductException("Invalid product added to the cart.");
        }
        if (!inStock) {
            throw new ProductNotAvailableException("The product is not available in stock.");
        }
        products.add(product);
        System.out.println("Product added to cart: " + product.getDetails());
    }

    public double calculateTotalPrice() {
        return products.stream().mapToDouble(Product::getPrice).sum();
    }

    public void displayCartDetails() {
        System.out.println("--- Cart Details ---");
        for (Product product : products) {
            product.printDetails();
        }
        System.out.println("Total Price: $" + calculateTotalPrice());
    }
}
