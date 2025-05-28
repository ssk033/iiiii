import os
import sys
import math

# ------------------------------------
# a. OS and SYS operations
# ------------------------------------
print("a. OS and SYS Module Operations:")

# 1. Print current working directory
cwd = os.getcwd()
print("Current Working Directory:", cwd)

# 2. List files in the current directory
files = os.listdir(cwd)
print("Files in Directory:", files)

# 3. Print Python version
print("Python Version:", sys.version)

# ------------------------------------
# b. Math module operations
# ------------------------------------
print("\n\nb. Math Module Operations:")

# Sample numbers
num_for_sqrt = 49
num_for_fact = 5
num1, num2 = 48, 18

# 1. Square root
sqrt_val = math.sqrt(num_for_sqrt)
print(f"Square root of {num_for_sqrt} is {sqrt_val}")

# 2. Factorial
factorial_val = math.factorial(num_for_fact)
print(f"Factorial of {num_for_fact} is {factorial_val}")

# 3. GCD
gcd_val = math.gcd(num1, num2)
print(f"GCD of {num1} and {num2} is {gcd_val}")
