# Part i: Encapsulation using BankAccount
class BankAccount:
    def __init__(self, balance):
        self.balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
        else:
            print("Deposit amount must be positive")

    def withdraw(self, amount):
        if amount > 0:
            self.balance -= amount
        else:
            print("Withdraw amount must be positive")

    def print_bal(self):
        print(self.balance)

acc = BankAccount(1000)
acc.print_bal()
acc.deposit(500)
acc.print_bal()
acc.withdraw(200)
acc.print_bal()

# -----------------------------------------------------------------------

# Part ii: Abstraction using abstract class
from abc import ABC, abstractmethod

class payment(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

class credit(payment):
    def pay(self, amount):
        print("Paid by credit card:", amount)

class debit(payment):
    def pay(self, amount):
        print("Paid by debit card:", amount)

class cash(payment):
    def pay(self, amount):
        print("Paid by cash:", amount)

method = debit()
method.pay(1000)
