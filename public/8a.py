from abc import ABC, abstractmethod

# ---------------------------------------------
# Part i: Laptop Class with Encapsulation
# ---------------------------------------------
class Laptop:
    def __init__(self, model, price):
        self.__model = model
        self.__price = price

    def get_model(self):
        return self.__model

    def set_model(self, model):
        self.__model = model

    def get_price(self):
        return self.__price

    def set_price(self, price):
        self.__price = price

# Example usage of Laptop class
print("---- Laptop Class Output ----")
lp = Laptop("Dell", 50000)
print("Model:", lp.get_model())
print("Price:", lp.get_price())
lp.set_model("HP")
lp.set_price(60000)
print("Updated Model:", lp.get_model())
print("Updated Price:", lp.get_price())

# ---------------------------------------------
# Part ii: Abstract Shape Class and Subclasses
# ---------------------------------------------
from abc import ABC, abstractmethod
class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius * self.radius

class Square(Shape):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side * self.side

# Example usage of Shape subclasses
print("\n---- Shape Class Output ----")
c = Circle(5)
print("Circle Area:", c.area())

s = Square(4)
print("Square Area:", s.area())
