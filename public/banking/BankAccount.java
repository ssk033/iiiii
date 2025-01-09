package banking;

public class BankAccount implements Account {
    protected String accountNumber;
    protected String accountHolder;
    protected double balance;

    public BankAccount(String accountNumber, String accountHolder, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    @Override
    public void deposit(double amount) {
        if (amount <= 0) {
            System.out.println("Deposit amount must be greater than 0.");
            return;
        }
        balance += amount;
        System.out.println("Successfully deposited: $" + amount);
    }

    @Override
    public void withdraw(double amount) throws Exception {
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal amount must be greater than 0.");
        }
        if (amount > balance) {
            throw new Exception("Insufficient funds.");
        }
        balance -= amount;
        System.out.println("Successfully withdrawn: $" + amount);
    }

    @Override
    public double checkBalance() {
        return balance;
    }
}
