def frist_non_repeating_char(para:str)->str:
    for c in para:
        print(f'{c} {para.find(c)} {para.rfind(c)}')
        if para.find(c).__eq__(para.rfind(c)): return c
    return ''

para = 'aaabbaachd'
first = frist_non_repeating_char(para)
print(first)