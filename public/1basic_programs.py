# a. Even or Odd
def check_even_odd():
    num = int(input("Enter a number: "))
    print(f"{num} is Even" if num % 2 == 0 else f"{num} is Odd")

# b. Factorial (recursion)
def factorial(n):
    return 1 if n <= 1 else n * factorial(n - 1)

def calc_factorial():
    num = int(input("Enter a number: "))
    print(f"Factorial of {num} is {factorial(num)}")

# a. Largest of three
def largest_of_three():
    a, b, c = int(input()), int(input()), int(input())
    largest = max(a, b, c)
    print(f"Largest is {largest}")

# b. Multiplication Table
def multiplication_table():
    num = int(input("Enter a number: "))
    for i in range(1, 11):
        print(f"{num} x {i} = {num*i}")

