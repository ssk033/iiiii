# 1. Demonstrate iter() and next() with exception handling
print("Using iter() and next() to iterate manually:")
my_iter = iter([1, 2, 3, 4, 5])
while True:
    try:
        print(next(my_iter))
    except StopIteration:
        break

print("\nExtracting phone numbers from text:")

# 2. Extract phone numbers using regex
import re

def extract_phone_numbers(text):
    phone_regex = re.compile(r"\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}")
    phone_numbers = re.findall(phone_regex, text)
    return phone_numbers

text = """
Here are some phone numbers:
(123) 456-7890, 123-456-7890, 987.654.3210, 555 123 4567, (111)2223333
"""

numbers = extract_phone_numbers(text)
print("Extracted phone numbers:")
for number in numbers:
    print(number)
