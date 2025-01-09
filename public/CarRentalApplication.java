import java.util.ArrayList;
import java.util.Scanner;

interface RentalService {
    boolean checkAvailability();
    void rent();
    void returnCar();
    double calculateRentalCost(int days, double distance);
}

class Car implements RentalService {
    private String make, model;
    private int year;
    private double dailyRate;
    private boolean isAvailable;

    public Car(String make, String model, int year, double dailyRate) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.dailyRate = dailyRate;
        this.isAvailable = true;
    }

    @Override
    public boolean checkAvailability() {
        return isAvailable;
    }

    @Override
    public void rent() {
        if (isAvailable) {
            isAvailable = false;
            System.out.println("Car rented successfully!");
        } else {
            System.out.println("Car is not available!");
        }
    }

    @Override
    public void returnCar() {
        isAvailable = true;
        System.out.println("Car returned successfully!");
    }

    @Override
    public double calculateRentalCost(int days, double distance) {
        return days * dailyRate + (distance * 0.5);
    }

    public void displayDetails() {
        System.out.println(make + " " + model + " (" + year + ") - $" + dailyRate + " per day, Available: " + isAvailable);
    }

    public Car compareRates(Car other) {
        return this.dailyRate < other.dailyRate ? this : other;
    }

    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }
}

class CarRentalService {
    private ArrayList<Car> cars;

    public CarRentalService() {
        this.cars = new ArrayList<>();
    }

    public void addCar(Car car) {
        cars.add(car);
        System.out.println("Car added: " + car.getMake() + " " + car.getModel());
    }

    public Car findCar(String make, String model) {
        for (Car car : cars) {
            if (car.getMake().equalsIgnoreCase(make) && car.getModel().equalsIgnoreCase(model)) {
                return car;
            }
        }
        return null;
    }

    public void displayAvailableCars() {
        System.out.println("Available Cars:");
        for (Car car : cars) {
            if (car.checkAvailability()) {
                car.displayDetails();
            }
        }
    }
}

public class CarRentalApplication {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        CarRentalService service = new CarRentalService();

        service.addCar(new Car("Toyota", "Camry", 2021, 50));
        service.addCar(new Car("Honda", "Civic", 2020, 45));
        service.addCar(new Car("Ford", "Focus", 2019, 40));

        int choice;
        do {
            System.out.println("\nCar Rental Service:");
            System.out.println("1. Display available cars");
            System.out.println("2. Rent a car");
            System.out.println("3. Return a car");
            System.out.println("4. Compare rental rates");
            System.out.println("5. Calculate rental cost");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");
            choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    service.displayAvailableCars();
                    break;

                case 2:
                    System.out.print("Enter car make: ");
                    String make = scanner.nextLine();
                    System.out.print("Enter car model: ");
                    String model = scanner.nextLine();
                    Car carToRent = service.findCar(make, model);
                    if (carToRent != null) {
                        carToRent.rent();
                    } else {
                        System.out.println("Car not found!");
                    }
                    break;

                case 3:
                    System.out.print("Enter car make: ");
                    make = scanner.nextLine();
                    System.out.print("Enter car model: ");
                    model = scanner.nextLine();
                    Car carToReturn = service.findCar(make, model);
                    if (carToReturn != null) {
                        carToReturn.returnCar();
                    } else {
                        System.out.println("Car not found!");
                    }
                    break;

                case 4:
                    System.out.print("Enter first car make: ");
                    make = scanner.nextLine();
                    System.out.print("Enter first car model: ");
                    model = scanner.nextLine();
                    Car car1 = service.findCar(make, model);
                    System.out.print("Enter second car make: ");
                    make = scanner.nextLine();
                    System.out.print("Enter second car model: ");
                    model = scanner.nextLine();
                    Car car2 = service.findCar(make, model);
                    if (car1 != null && car2 != null) {
                        Car cheaperCar = car1.compareRates(car2);
                        System.out.println("Cheaper car is:");
                        cheaperCar.displayDetails();
                    } else {
                        System.out.println("One or both cars not found!");
                    }
                    break;

                case 5:
                    System.out.print("Enter car make: ");
                    make = scanner.nextLine();
                    System.out.print("Enter car model: ");
                    model = scanner.nextLine();
                    Car carForCost = service.findCar(make, model);
                    if (carForCost != null) {
                        System.out.print("Enter rental days: ");
                        int days = scanner.nextInt();
                        System.out.print("Enter distance traveled (km): ");
                        double distance = scanner.nextDouble();
                        double cost = carForCost.calculateRentalCost(days, distance);
                        System.out.println("Total rental cost: $" + cost);
                    } else {
                        System.out.println("Car not found!");
                    }
                    break;

                case 6:
                    System.out.println("Exiting... Thank you!");
                    break;

                default:
                    System.out.println("Invalid choice!");
            }
        } while (choice != 6);

        scanner.close();
    }
}
