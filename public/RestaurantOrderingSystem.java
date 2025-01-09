class MenuItem {
    final String name;
    double price;

    public MenuItem(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public final void displayDetails() {
        System.out.println("Item: " + name + " | Price: $" + price);
    }
}

class FoodItem extends MenuItem {
    boolean isVegetarian;

    public FoodItem(String name, double price, boolean isVegetarian) {
        super(name, price);
        this.isVegetarian = isVegetarian;
    }

    public void displayFoodDetails() {
        super.displayDetails();
        System.out.println("Vegetarian: " + (isVegetarian ? "Yes" : "No"));
    }
}

class DrinkItem extends MenuItem {
    boolean isAlcoholic;

    public DrinkItem(String name, double price, boolean isAlcoholic) {
        super(name, price);
        this.isAlcoholic = isAlcoholic;
    }

    public void displayDrinkDetails() {
        super.displayDetails();
        System.out.println("Alcoholic: " + (isAlcoholic ? "Yes" : "No"));
    }
}

public class RestaurantOrderingSystem {
    public static void main(String[] args) {
        MenuItem[] menu = new MenuItem[4];

        menu[0] = new FoodItem("Veg Burger", 5.99, true);
        menu[1] = new FoodItem("Chicken Burger", 6.99, false);
        menu[2] = new DrinkItem("Cola", 2.50, false);
        menu[3] = new DrinkItem("Beer", 4.99, true);

        System.out.println("Menu Items:");
        for (MenuItem item : menu) {
            item.displayDetails();
            if (item instanceof FoodItem) {
                ((FoodItem) item).displayFoodDetails();
            } else if (item instanceof DrinkItem) {
                ((DrinkItem) item).displayDrinkDetails();
            }
            System.out.println();
        }
    }
}
