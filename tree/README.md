# Abstract Data Type
  **ADT binaryTree {
        IitBiTree():
            make an empty binary tree;
        destroy():
            destroy all the nodes in binary tree;
        creatBiTree(definition):
            acordding to the definition creat a tree;
        clear(): 
            empty all the nodes, data of very node are assinged to undefined;
        isEmpty():
            if binary tree has no node or root is null, then return "empty", otherwise return "not empty";
        getDepth():
            return the depth of binary tree;
        getRoot():
            return the root of binary tree;
        getNode(index):
            find the specific node in binary tree, then return it;
        assign(value, index):
            find the specific node in binary tree and assign value to it;
        getParent(index):
            if the specific node isn't root then return it's parent's node, otherwise return "no parent";
        getLeftChild(index):
            return the node's left child;
        getRightChild(index):
            return the node's right child;
        insertChild(index, newNode, LR):
            LR is 0 or 1, insert to left or right; newNode is not an empty binary tree and has no right sub-tree; acordding to the LR is 0 or 1, assign newNode to the node's left or right as a new sub-tree, and node's original letf or right sub-tree as the new sub-tree assigned to the newTree's right;
        deleteChild(index, LR):
            LR is 0 or 1, delete the left or sub-tree; cordding to LR, delete the node's left sub-tree or right sub-tree;
        preOrderTraverse(visit, currentNode):
            traverse the tree from currentNode in preorder, visit is a function invoked for each node; if currentNode is undefined, then traverse this whole tree in oreirder;
        inOrderTraverse(visit, currentNode):
            traverse the tree from currentNode in order, visit is a function invoked for each node; if currentNode is undefined, then traverse this whole tree in order;
        postOrderTraverse(visit, currentNode):
            traverse the tree in post order, visit is a function invoked for each node; if currentNode is undefined, then traverse this whole tree in post order;
        levelOrderTraverse(visit, currentNode):
            traverse the tree in post order, visit is a function invoked for each node; if currentNode is undefined, then traverse this whole tree;
    }