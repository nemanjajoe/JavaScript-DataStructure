# Abstract Data Type

    the prior queue is a type of special queue, in which elements have priorty and are placed in order from the lowest priorty to the highest; in this example, the queue is based on disorder list;

ADT pQueue {
    InitPQueue():
        make a new empty prior queue;
    clear():
        clear queue, make it has no element;
    isEmpty():
        if the queue has no elements, then return empty, otherwise, return not empty;
    getLength():
        return the number of elements existed in the queue;
    getFront():
        return the priorest element in queue;
    pInsert(element):
        add element to the queue;
    pDelete():
        delete the priorest element in queue;
}