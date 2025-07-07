# Part 1: Print numbers from 1 to 50, skipping multiples of 5 using 'continue'
for i in range(1, 51):
    if i % 5 == 0:
        continue  
    print(i, end=" ")
print()  

# -----------------------------------------------------------------------

# Iterative approach to print first N Fibonacci numbers
def fibiter(N):
    a, b = 0, 1
    for i in range(N):
        print(a, end=" ")
        a, b = b, a + b  

# Recursive function to return the Nth Fibonacci number
def fibrec(N):
    if N <= 1:
        return N  
    else:
        return fibrec(N - 1) + fibrec(N - 2)  

n = int(input("\nEnter a number: "))

print("Fibonacci series using iteration:")
fibiter(n)

print("\nFibonacci series using recursion:")
for i in range(n):
    print(fibrec(i), end=" ")
