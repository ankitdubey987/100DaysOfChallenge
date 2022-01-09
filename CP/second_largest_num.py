# second_largest_num.py
'''
Python program to find second largest number in a list

Example:
    Input: list1 = [10, 20, 4]
    Output: 10

    Input: list2 = [70, 11, 20, 4, 100]
    Output: 70
'''
import heapq

def second_largest(arr:list[int])->int:
    heapq.heapify(arr)
    return (heapq.nlargest(2,arr))[1]

list1 = [10, 20, 4]
print(second_largest(list1))

list2 = [70, 11, 20, 4, 100]
print(second_largest(list2))