import numpy as np
import pandas as pd

# -----------------------------------------
# 1.a. NumPy array of 5 zeros and 5 ones
# -----------------------------------------
zeros_array = np.zeros(5)
ones_array = np.ones(5)

print("1.a. Array of 5 zeros:", zeros_array)
print("     Array of 5 ones:", ones_array)

# -----------------------------------------
# 1.b. NumPy array from 1 to 10 with step 0.5
# -----------------------------------------
range_array = np.arange(1, 10.5, 0.5)
print("\n1.b. Array from 1 to 10 with step 0.5:", range_array)

# -----------------------------------------
# 2.a. Mean, Median, Std Dev of a NumPy array
# -----------------------------------------
sample_array = np.array([10, 20, 30, 40, 50])
mean = np.mean(sample_array)
median = np.median(sample_array)
std_dev = np.std(sample_array)

print("\n2.a. Sample Array:", sample_array)
print(f"     Mean: {mean}")
print(f"     Median: {median}")
print(f"     Standard Deviation: {std_dev}")

# -----------------------------------------
# 2.b. Unique elements in a NumPy array
# -----------------------------------------
array_with_duplicates = np.array([1, 2, 2, 3, 4, 4, 5])
unique_elements = np.unique(array_with_duplicates)

print("\n2.b. Unique elements in array:", unique_elements)

