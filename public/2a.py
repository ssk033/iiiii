# Part i
def dec(func):
    def wrapper():
        print("before")
        func()
        print("after")
    return wrapper

@dec
def hello():
    print("hello")

hello()

# Part ii
def dec(func):
    def wrapper():
        result = func()
        return result.upper()
    return wrapper

@dec
def hello():
    return "hello"

print(hello())
