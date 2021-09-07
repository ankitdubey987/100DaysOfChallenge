# addNodeAtHead.py

def nodeAtHead(llist: SinglyLinkedList, data:int)->SinglyLinkedList:
    node = SinglyLinkedList(data)
    if llist:
        node.next = llist
    return node