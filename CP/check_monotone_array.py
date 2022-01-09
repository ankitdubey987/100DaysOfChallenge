# check_monotone_array.py

'''
NOTE: 
    The all() function is an inbuilt function in Python which returns true if all the elements of a given iterable( List, Dictionary, Tuple, set, etc) are True else it returns False. It also returns True if the iterable object is empty.
'''

def check_monotone(arr:list[int])->bool:
    return (all(arr[idx]<=arr[idx+1] for idx in range(len(arr)-1)) or 
    all(arr[idx]>=arr[idx+1] for idx in range(len(arr)-1)))

A = [6, 5, 4, 4]

print(check_monotone(A))

B = [5, 15, 20, 10]
print(check_monotone(B))