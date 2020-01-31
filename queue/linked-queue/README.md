# Abstract Data Type
ADT Queue{
    initQueue():
        made a new empty queue;
    clear():
        clear the queue, make queue without elements;
    isEmpty():
        if the queue has no elements, then return empty, otherwise, return not empty;
    getLength():
        return the number of elements existed in the queue;
    getHead():
        return the head element, which also is the first element in the queue;
    enQueue(element):
        add the element to the trail of the queue, length of the queue increase 1, return the queue;
    deQueue():
        delete the head element, length of the queue decrease 1, return the queue;
    traverse(visit):
        visit() is a function; each element in queue as the argument to visit() function and return a new element to refresh;
}