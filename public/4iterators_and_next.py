# a. Iterator class to return even numbers up to a given limit
class EvenNumbers:
    def __init__(self, limit):
        self.limit = limit
        self.current = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current > self.limit:
            raise StopIteration
        else:
            # Only return even numbers
            if self.current % 2 == 0:
                result = self.current
                self.current += 2
                return result
            else:
                self.current += 1
                return self.__next__()

# Testing the EvenNumbers iterator
print("a. Even numbers up to 10:")
evens = EvenNumbers(10)
for num in evens:
    print(num, end=' ')
print("\n")

# b. Using iter() and next() on a list with StopIteration handling
print("b. Iterating over a list manually using iter() and next():")

sample_list = [10, 20, 30, 40, 50]
list_iterator = iter(sample_list)

while True:
    try:
        item = next(list_iterator)
        print(item)
    except StopIteration:
        print("Reached end of the iterator.")
        break
