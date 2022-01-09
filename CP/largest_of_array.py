# largest_of_array.py
import heapq
def get_largest_of_array(arr:list[int])->int:
    heapq.heapify(arr)
    return heapq.nlargest(1,arr)

lst = [12,4,23,153,265,234,31,231,5,3254,643,65345,245,3242,34212,31,5334,5,324,24,5,235]

print(get_largest_of_array(lst))