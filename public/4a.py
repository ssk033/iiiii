# Part i: Extract phone numbers from text
import re

text = "Contact us at (123) 456-7890 or 981-654-3210 or 123-234-4465"
pattern = r'(\(\d{3}\)\s\d{3}-\d{4}|\d{3}-\d{3}-\d{4})'

phone = re.findall(pattern, text)
print(phone)

# -----------------------------------------------------------------------

# Part ii: Try-Except-Finally for file handling
try:
    file = open("4a.py")
    print(file.read())
except:
    print("error")
finally:
    try:
        file.close()
    except:
        print("file not opened")
