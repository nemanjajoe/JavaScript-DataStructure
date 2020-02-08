# abstract data type 

    ADT List {
 
        InitList(): 
            output: made a list without elements;
 
        destroy():
            prepare: list exist,
            output: destroy the list;
 
        isEmpty(): 
            prepare: list exist,
            output: if the list has no elements, then retuen TURE, otherwise retuen FALSE;
        lenghth():

            prepare: list exist,
            output: return the number of the elements existed in the list;
        
        getElem(i): 
            prepare: list exist, 0 < i <= list.length,
            output: return the i-th element in the list;
        
        locateElem(e, compare):
            prepare: list exist, compare() is the optional function used to match the relationship bettwen e and target element.
        
            output: find the first element which matchs e with compare() relationship, then return the index of this element; if no compare then return index of the first element equaled to e;
        
        priorElem(e):
            prepare: list exist,
            output: find the element e in list and return its prior element, if e is the first element or no compared element then return FALSE;
        
        nextElem(e):
            prepare: list exist,
            output: find the element e in list and return its next element,
            if e is the last element or no compared element then return FALSE;
        
        clear():
            preare: list exist,
            output: clear all of the elements;
        
        insert(i, e):
            prepare: list exist, 0 < i < list lenghth,
            ouput: find the location i in the list and put e to the i-th location, the lenghth of the list increse 1;
        
        deleteElem(i):
            prepare: list exist, 0 < i < list lenghth -1,
            output: find the i-th element in list, then return the element and delete it. list lenghth decrease 1;
        
        traverse(visit):
            prepare:list exist, visit() is a function
            output: for each element in list, as the argument to the function vist(), then invoke the function for each element;
    } ADT list;