class Vehicle {
    String make;
    String model;
    int year;

    public Vehicle(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public void displayDetails() {
        System.out.println("Vehicle Details:");
        System.out.println("Make: " + make);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
    }

    public void displayDetails(boolean detailed) {
        if (detailed) {
            displayDetails();
            System.out.println("Additional Info: Basic Vehicle.");
        } else {
            displayDetails();
        }
    }

    public static void showType() {
        System.out.println("Class Type: Vehicle");
    }
}

class Car extends Vehicle {
    int numberOfDoors;

    public Car(String make, String model, int year, int numberOfDoors) {
        super(make, model, year);
        this.numberOfDoors = numberOfDoors;
    }

    @Override
    public void displayDetails() {
        super.displayDetails();
        System.out.println("Number of Doors: " + numberOfDoors);
    }

    public void displayDetails(String format) {
        if (format.equalsIgnoreCase("compact")) {
            System.out.println(make + " " + model + " (" + year + ") - " + numberOfDoors + " doors");
        } else {
            displayDetails();
        }
    }

    public static void showType() {
        System.out.println("Class Type: Car");
    }
}

class Truck extends Vehicle {
    double loadCapacity;

    public Truck(String make, String model, int year, double loadCapacity) {
        super(make, model, year);
        this.loadCapacity = loadCapacity;
    }

    @Override
    public void displayDetails() {
        super.displayDetails();
        System.out.println("Load Capacity: " + loadCapacity + " tons");
    }

    public void displayDetails(String format) {
        if (format.equalsIgnoreCase("brief")) {
            System.out.println(make + " " + model + " (" + year + ") - " + loadCapacity + " tons");
        } else {
            displayDetails();
        }
    }

    public static void showType() {
        System.out.println("Class Type: Truck");
    }
}

public class VehicleManagementSystem {
    public static void main(String[] args) {
        Vehicle[] vehicles = new Vehicle[2];
        vehicles[0] = new Car("Toyota", "Corolla", 2020, 4);
        vehicles[1] = new Truck("Ford", "F-150", 2018, 2.5);

        System.out.println("--- Vehicle Details ---");
        for (Vehicle vehicle : vehicles) {
            vehicle.displayDetails();
            System.out.println();
        }

        System.out.println("--- Class Types ---");
        Vehicle.showType();
        Car.showType();
        Truck.showType();
    }
}
