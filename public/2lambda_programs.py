# a. Lambda function to find product of two numbers
product = lambda x, y: x * y
print("a. Product of 5 and 6:", product(5, 6))


# b. Lambda function to sort a list of tuples by the second element
tuple_list = [(1, 3), (4, 1), (5, 2), (2, 4)]
sorted_list = sorted(tuple_list, key=lambda x: x[1])
print("b. Sorted list by second element:", sorted_list)


# a. Function returning a lambda function to multiply by a given factor
def multiplier(factor):
    return lambda x: x * factor

times3 = multiplier(3)
print("a. Multiply 7 by 3 using returned lambda:", times3(7))


# b. Regular function that returns sum of two numbers
def add_numbers(a, b):
    return a + b

print("b. Sum of 8 and 12:", add_numbers(8, 12))
