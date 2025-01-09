class WeatherStation {
    String location;
    String stationId;

    public WeatherStation(String location, String stationId) {
        this.location = location;
        this.stationId = stationId;
    }

    public void displayData() {
        System.out.println("Location: " + location);
        System.out.println("Station ID: " + stationId);
        System.out.println("Uppercase Location: " + location.toUpperCase());
        System.out.println("Station ID Substring: " + stationId.substring(0, 3));
        System.out.println("Location Comparison with 'CityA': " + location.equals("CityA"));
    }
}

class TemperatureStation extends WeatherStation {
    double temperature;

    public TemperatureStation(String location, String stationId, double temperature) {
        super(location, stationId);
        this.temperature = temperature;
    }

    @Override
    public void displayData() {
        super.displayData();
        System.out.println("Temperature: " + temperature + "°C");
        StringBuffer buffer = new StringBuffer(stationId);
        buffer.append("-TEMP");
        System.out.println("Modified Station ID: " + buffer.toString());
        buffer.reverse();
        System.out.println("Reversed Station ID: " + buffer.toString());
    }
}

class RainfallStation extends WeatherStation {
    double rainfall;

    public RainfallStation(String location, String stationId, double rainfall) {
        super(location, stationId);
        this.rainfall = rainfall;
    }

    @Override
    public void displayData() {
        super.displayData();
        System.out.println("Rainfall: " + rainfall + " mm");
        StringBuffer buffer = new StringBuffer(location);
        buffer.insert(0, "Station: ");
        System.out.println("Location with Prefix: " + buffer.toString());
        buffer.delete(0, 9);
        System.out.println("After Removing Prefix: " + buffer.toString());
    }
}

public class WeatherMonitoringSystem {
    public static void main(String[] args) {
        WeatherStation[] stations = new WeatherStation[2];
        stations[0] = new TemperatureStation("CityA", "TEMP001", 25.5);
        stations[1] = new RainfallStation("CityB", "RAIN002", 120.8);

        for (WeatherStation station : stations) {
            System.out.println("\n--- Station Details ---");
            station.displayData();
        }

        System.out.println("\n--- String and StringBuffer Handling ---");
        String stationName = "Weather Station A";
        System.out.println("Original Station Name: " + stationName);
        System.out.println("Concatenated Name: " + stationName + " - Main Hub");
        System.out.println("Substring (0-8): " + stationName.substring(0, 8));

        StringBuffer buffer = new StringBuffer("Station123");
        buffer.append("-Weather");
        System.out.println("Appended StringBuffer: " + buffer.toString());
        buffer.replace(0, 7, "Base");
        System.out.println("Replaced StringBuffer: " + buffer.toString());
        buffer.reverse();
        System.out.println("Reversed StringBuffer: " + buffer.toString());
    }
}
