# power_of_two.py
'''
Problem statement:
Check whether a number is power of 2 or not
if it is add 1 to an array and if not add 0 to it.
eg: inp: 10,20,30,2,4,6,8,16,32
    out: [0, 0, 0, 1, 1, 0, 1, 1, 1]
'''

def method_1(arr:list[int])->list[int]:
    '''
    We will select each element and divide it by 2 until it is divisble,
    if it is 0 then simply store 0 to the out_arr variable,
    if item is totally divisble we will store 1 to and out_arr varibale,
    if item is not we will store 0 to it.
    '''
    out_arr = list()
    for item in arr:
        if item == 0:
            out_arr.append(0)
        while item != 1:
            if (item % 2) != 0:
                out_arr.append(0)
                break
            item = item//2
        if item == 1:
            out_arr.append(1)
    
    return out_arr

def method_2(arr:list[int])->list[int]:
    '''
    We know that all the power of 2 numbers contain a set bit equal to 1.
    eg, 4 => 100 , 2 => 10.
    approach (a):
        Thus, count the number of set bits, if it is 1 we can say that item is 
        power of 2.
    approach (b):
        If we reduce the item which is of power of 2, then the set bit equals 0 or becomes unset bit.
        eg, 4 => 100, (4-1) => 3 => 011

        i.e., if an item is a power of 2 then bitwise & of item and item-1 will be zero. Thus, on the basis of expression " item & (item-1)"

        And to overcome the case of 0:
            (item and (not item & (item - 1)))
    '''
    return [ 1 if (item and (not item & (item - 1))) else 0 for item in arr ]

inp = list(map(int, input('Enter the elements with space: ').split(' ')))
print(method_1(inp))
print(method_2(inp))