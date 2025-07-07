# ------------------------------------------
# Part i: Read and print first 100 bytes
# ------------------------------------------

with open("image.png", "rb") as file:
    first_100_bytes = file.read(100)
    print(first_100_bytes)

# ------------------------------------------
# Part ii: Copy binary file to new file
# ------------------------------------------

with open("image.png", "rb") as file1:
    data = file1.read()

with open("copy.png", "wb") as file2:
    file2.write(data)
