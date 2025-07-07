# Part i: Stop loop on negative number using break
lst = [1, 2, 3, 4, 5, 6, 6, -6, 7, 7, 7, 7, 7]
for i in lst:
    if i < 0:
        break
    else:
        print(i, end=" ")

# -----------------------------------------------------------------------

# Part ii: Count character occurrences using dictionary
st = "jAGSDJGD DKJGDSKJAHGD  sahhgaskjf asksakkkadgsdkhsas"
d = {}

for i in st:
    if i in d:
        d[i] += 1
    else:
        d[i] = 1

print("\n", d)
