# mckinley_and_rice.py

def reverse_list(lst:list[int])->list:
    '''
    This returns the reverse array on the basis
    of mid value of the array,
    if it is odd,
        reverse the first half till mid value
        and reverse second half from mid value
        except the mid value.
    if even,
        do the same above till mid value for
        first half then from mid value till last
        element
    '''
    out_list = list()
    if len(lst)%2!=0:
        mid_value = len(lst)//2
        first_half = lst[:mid_value]
        second_half = lst[mid_value+1:]
        out_list.extend(first_half[::-1])
        out_list.append(lst[mid_value])
        out_list.extend(second_half[::-1])
        return out_list
    mid_value = len(lst)//2
    first_half = lst[:mid_value][::-1]
    second_half = lst[mid_value:][::-1]
    out_list.extend(first_half)
    out_list.extend(second_half)
    return out_list

# lst = [1,2,3,4,5,6,7]
lst = [1,2,3,4,5,6]

print(reverse_list(lst))
