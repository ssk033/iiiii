import shopping.*;

public class ShoppingApplication {
    public static void main(String[] args) {
        Electronics laptop = new Electronics("E101", "Laptop", 1200.99, "Dell", 24);
        Clothing tshirt = new Clothing("C201", "T-Shirt", 19.99, "L", "Cotton");

        Cart cart = new Cart();

        try {
            cart.addProduct(laptop, true);
            cart.addProduct(tshirt, true);
            cart.addProduct(laptop, false);
        } catch (ProductNotAvailableException | InvalidProductException e) {
            System.err.println("Error: " + e.getMessage());
        }

        cart.displayCartDetails();
    }
}
