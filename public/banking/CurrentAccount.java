package banking;

public class CurrentAccount extends BankAccount {
    private double overdraftLimit;

    public CurrentAccount(String accountNumber, String accountHolder, double balance, double overdraftLimit) {
        super(accountNumber, accountHolder, balance);
        this.overdraftLimit = overdraftLimit;
    }

    @Override
    public void withdraw(double amount) throws OverdraftLimitExceededException {
        if (amount > balance + overdraftLimit) {
            throw new OverdraftLimitExceededException("Overdraft limit exceeded.");
        }
        balance -= amount;
        System.out.println("Successfully withdrawn: $" + amount);
    }
}
