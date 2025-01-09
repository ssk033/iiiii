class Flight {
    protected String flightNumber;
    protected String airline;
    protected double basePrice;

    public Flight() {
        this.flightNumber = "Unknown";
        this.airline = "Unknown";
        this.basePrice = 0.0;
    }

    public Flight(String flightNumber, String airline, double basePrice) {
        this.flightNumber = flightNumber;
        this.airline = airline;
        this.basePrice = basePrice;
    }

    public void displayDetails() {
        System.out.println("Flight Number: " + flightNumber);
        System.out.println("Airline: " + airline);
        System.out.println("Base Price: " + basePrice);
    }
}

class DomesticFlight extends Flight {
    private double domesticTaxRate;

    public DomesticFlight() {
        super();
        this.domesticTaxRate = 0.0;
    }

    public DomesticFlight(String flightNumber, String airline, double basePrice, double domesticTaxRate) {
        super(flightNumber, airline, basePrice);
        this.domesticTaxRate = domesticTaxRate;
    }

    public double calculatePrice() {
        return basePrice + (basePrice * domesticTaxRate);
    }

    @Override
    public void displayDetails() {
        super.displayDetails();
        System.out.println("Domestic Tax Rate: " + domesticTaxRate);
        System.out.println("Total Price: " + calculatePrice());
    }
}

class InternationalFlight extends Flight {
    private double internationalTaxRate;
    private double customsFee;

    public InternationalFlight() {
        super();
        this.internationalTaxRate = 0.0;
        this.customsFee = 0.0;
    }

    public InternationalFlight(String flightNumber, String airline, double basePrice, double internationalTaxRate, double customsFee) {
        super(flightNumber, airline, basePrice);
        this.internationalTaxRate = internationalTaxRate;
        this.customsFee = customsFee;
    }

    public double calculatePrice() {
        return basePrice + (basePrice * internationalTaxRate) + customsFee;
    }

    @Override
    public void displayDetails() {
        super.displayDetails();
        System.out.println("International Tax Rate: " + internationalTaxRate);
        System.out.println("Customs Fee: " + customsFee);
        System.out.println("Total Price: " + calculatePrice());
    }
}

public class FlightBookingSystem {
    public static void main(String[] args) {
        Flight domesticDefault = new DomesticFlight();
        Flight domesticParameterized = new DomesticFlight("D123", "Air India", 5000, 0.1);
        Flight internationalParameterized = new InternationalFlight("I456", "Emirates", 15000, 0.2, 3000);

        System.out.println("Domestic Flight (Default Constructor):");
        domesticDefault.displayDetails();

        System.out.println("\nDomestic Flight (Parameterized Constructor):");
        domesticParameterized.displayDetails();

        System.out.println("\nInternational Flight (Parameterized Constructor):");
        internationalParameterized.displayDetails();
    }
}
