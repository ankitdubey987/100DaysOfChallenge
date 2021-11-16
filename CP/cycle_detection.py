# cycle_detection.py
def has_cycle(head):
    item_dict = dict()
    item_dict[head] = head
    while head.next is not None:
        print(head)
        item_dict[head] = head
        head = head.next
        print(head)
        if item_dict.get(head,None) is not None:
            return 1
    return 0