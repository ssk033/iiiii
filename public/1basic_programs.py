# Program 1: Check Even or Odd
def check_even_odd():
    num = int(input("Enter a number: "))
    if num % 2 == 0:
        print(f"{num} is even.")
    else:
        print(f"{num} is odd.")

# Program 2: Factorial using Recursion
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

def find_factorial():
    num = int(input("Enter a number to find factorial: "))
    if num < 0:
        print("Factorial is not defined for negative numbers.")
    else:
        print(f"Factorial of {num} is {factorial(num)}")

# Program 3: Largest of Three Numbers
def largest_of_three():
    a = float(input("Enter first number: "))
    b = float(input("Enter second number: "))
    c = float(input("Enter third number: "))

    if (a >= b) and (a >= c):
        largest = a
    elif (b >= a) and (b >= c):
        largest = b
    else:
        largest = c

    print(f"The largest number is {largest}")

# Program 4: Multiplication Table
def multiplication_table():
    num = int(input("Enter a number to print its multiplication table: "))
    print(f"Multiplication table of {num}:")
    for i in range(1, 11):
        print(f"{num} x {i} = {num * i}")

# To run any program independently, just call the function here:
# Example:
# check_even_odd()
# find_factorial()
# largest_of_three()
# multiplication_table()
