import university.*;
import java.util.Scanner;

public class UniversityManagementApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        
        System.out.println("--- Enter Details for Professor ---");
        System.out.print("Name: ");
        String profName = scanner.nextLine();
        System.out.print("Age: ");
        int profAge = scanner.nextInt();
        scanner.nextLine();
        System.out.print("Designation: ");
        String profDesignation = scanner.nextLine();
        System.out.print("Salary: ");
        double profSalary = scanner.nextDouble();
        scanner.nextLine();
        System.out.print("Department: ");
        String profDepartment = scanner.nextLine();
        System.out.print("Research Area: ");
        String profResearchArea = scanner.nextLine();
        Professor professor = new Professor(profName, profAge, profDesignation, profSalary, profDepartment, profResearchArea);


        System.out.println("--- Enter Details for Admin Staff ---");
        System.out.print("Name: ");
        String adminName = scanner.nextLine();
        System.out.print("Age: ");
        int adminAge = scanner.nextInt();
        scanner.nextLine();
        System.out.print("Designation: ");
        String adminDesignation = scanner.nextLine();
        System.out.print("Salary: ");
        double adminSalary = scanner.nextDouble();
        scanner.nextLine();
        System.out.print("Role: ");
        String adminRole = scanner.nextLine();
        System.out.print("Working Hours: ");
        int adminWorkingHours = scanner.nextInt();
        AdminStaff adminStaff = new AdminStaff(adminName, adminAge, adminDesignation, adminSalary, adminRole, adminWorkingHours);

        
        System.out.println("\n--- Details of Professor ---");
        professor.printDetails();
        System.out.println("\n--- Details of Admin Staff ---");
        adminStaff.printDetails();

        scanner.close();
    }
}
