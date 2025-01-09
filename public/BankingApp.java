import banking.*;
import java.util.Scanner;

public class BankingApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        SavingsAccount savingsAccount = new SavingsAccount("SA123", "John Doe", 5000, 0.05);
        CurrentAccount currentAccount = new CurrentAccount("CA456", "Jane Doe", 3000, 1000);

        try {
            System.out.println("\n--- Savings Account ---");
            savingsAccount.deposit(1000);
            savingsAccount.withdraw(2000);
            System.out.println("Balance: $" + savingsAccount.checkBalance());
            double interest = savingsAccount.calculateInterest(1);
            System.out.println("Interest (1 year): $" + interest);

            System.out.println("\n--- Current Account ---");
            currentAccount.deposit(500);
            currentAccount.withdraw(3500);
            System.out.println("Balance: $" + currentAccount.checkBalance());

            System.out.println("\n--- Testing Custom Exceptions ---");
            currentAccount.withdraw(5000);
        } catch (InsufficientFundsException | OverdraftLimitExceededException e) {
            System.out.println("Error: " + e.getMessage());
        } catch (NumberFormatException e) {
            System.out.println("Error: Invalid number format.");
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }

        scanner.close();
    }
}
