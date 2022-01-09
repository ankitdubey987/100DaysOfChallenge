# array_rotate.py
'''
Write a function rotate(arr[], d, n) that rotates arr[] of size n by d elements.
Example
Input :  arr[] = [1, 2, 3, 4, 5, 6, 7]
         d = 2
Output : arr[] = [3, 4, 5, 6, 7, 1, 2] 
'''

def rotate(arr:list[int],d:int,n:int)->list[int]:
    out_arr = arr[d:]
    out_arr.extend(arr[:d])
    return out_arr

arr = [1, 2, 3, 4, 5, 6, 7]
d = 2
n = len(arr)
print(rotate(arr,d,n))