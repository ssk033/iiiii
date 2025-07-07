# Part i: Generate 3x3 matrix with random values between 0 and 1
import numpy as np
matrix = np.random.rand(3, 3)
print(matrix)

# -----------------------------------------------------------------------

# Part ii: Create a diagonal matrix with specified values
values = [10, 20, 30]
matrix = np.diag(values)
print(matrix)
