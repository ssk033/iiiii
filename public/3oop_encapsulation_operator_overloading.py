# a. BankAccount class demonstrating encapsulation
class BankAccount:
    def __init__(self, initial_balance=0):
        self.__balance = initial_balance  # private attribute
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"Deposited: {amount}. New balance: {self.__balance}")
        else:
            print("Deposit amount must be positive.")
    
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            print(f"Withdrawn: {amount}. Remaining balance: {self.__balance}")
        else:
            print("Insufficient funds or invalid withdrawal amount.")
    
    def get_balance(self):
        return self.__balance

# Testing BankAccount
print("a. BankAccount Encapsulation Demo")
account = BankAccount(100)
account.deposit(50)
account.withdraw(30)
print("Current balance:", account.get_balance())

print("\n" + "-"*40 + "\n")

# b. Vector class with operator overloading for '+'
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    # Overloading the + operator
    def __add__(self, other):
        if isinstance(other, Vector):
            return Vector(self.x + other.x, self.y + other.y)
        else:
            raise TypeError("Operands must be Vector instances")
    
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

# Testing Vector addition
print("b. Vector Operator Overloading Demo")
v1 = Vector(2, 3)
v2 = Vector(4, 5)
v3 = v1 + v2
print(f"{v1} + {v2} = {v3}")
