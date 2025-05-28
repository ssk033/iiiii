# a. Demonstrate use of iter() and next() until StopIteration
def manual_iteration():
    sample_list = [10, 20, 30, 40, 50]
    iterator = iter(sample_list)

    print("Iterating through the list manually using next():")
    while True:
        try:
            item = next(iterator)
            print(item)
        except StopIteration:
            print("Reached the end of the iterator.")
            break

# b. Extract phone numbers from text
import re

def extract_phone_numbers(text):
    # Regex pattern for phone numbers in (123) 456-7890 or 123-456-7890 format
    pattern = r'\(?\d{3}\)?[\s-]?\d{3}-\d{4}'
    matches = re.findall(pattern, text)
    print("Extracted phone numbers:")
    for match in matches:
        print(match)

# Test both functions
if __name__ == "__main__":
    print("----- Part A: Iterator Demo -----")
    manual_iteration()

    print("\n----- Part B: Phone Number Extraction -----")
    test_text = """
    You can reach John at (123) 456-7890 or his office number 987-654-3210.
    Also, call the support line at (555)123-4567 or 444-555-6666.
    """
    extract_phone_numbers(test_text)
