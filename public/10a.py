import numpy as np

# -----------------------------------------------
# Part i: Extract all even numbers from a NumPy array
# -----------------------------------------------

arr1 = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
even_numbers = arr1[arr1 % 2 == 0]
print("Even numbers in the array:")
print(even_numbers)

# -----------------------------------------------
# Part ii: Replace all negative numbers with zero
# -----------------------------------------------

arr2 = np.array([[1, -2, 3],
                 [-4, 5, -6],
                 [7, -8, 9]])

print("\nOriginal array with negatives:")
print(arr2)

arr2[arr2 < 0] = 0

print("Modified array (negatives replaced with 0):")
print(arr2)
