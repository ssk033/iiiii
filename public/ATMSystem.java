class ATM {
    private double balance;

    public ATM(double initialBalance) {
        this.balance = initialBalance;
    }

    public synchronized void withdraw(double amount) {
        if (balance >= amount) {
            System.out.println(Thread.currentThread().getName() + " is withdrawing " + amount);
            balance -= amount;
            System.out.println(Thread.currentThread().getName() + " has withdrawn " + amount);
        } else {
            System.out.println(Thread.currentThread().getName() + ": Insufficient funds for withdrawal of " + amount);
        }
    }

    public synchronized void deposit(double amount) {
        System.out.println(Thread.currentThread().getName() + " is depositing " + amount);
        balance += amount;
        System.out.println(Thread.currentThread().getName() + " has deposited " + amount);
    }

    public synchronized double getBalance() {
        return balance;
    }
}

class Customer extends Thread {
    private ATM atm;

    public Customer(ATM atm, String name) {
        super(name);
        this.atm = atm;
    }

    @Override
    public void run() {
        atm.deposit(100);
        atm.withdraw(50);
        System.out.println(Thread.currentThread().getName() + " checked balance: " + atm.getBalance());
        atm.withdraw(200);
        System.out.println(Thread.currentThread().getName() + " final balance: " + atm.getBalance());
    }
}

public class ATMSystem {
    public static void main(String[] args) {
        ATM atm = new ATM(1000);

        Customer customer1 = new Customer(atm, "Customer1");
        Customer customer2 = new Customer(atm, "Customer2");
        Customer customer3 = new Customer(atm, "Customer3");

        customer1.start();
        customer2.start();
        customer3.start();

        try {
            customer1.join();
            customer2.join();
            customer3.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Final ATM Balance: " + atm.getBalance());
    }
}
