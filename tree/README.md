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
            if binary tree has no node, then return "empty", otherwise return "not empty";
        getDepth():
            return the depth of binary tree;
        getRoot():
            return the root of binary tree;
        getValue(node):
            find the specific node in binary tree, then return it's value;
        assign(node, value):
            find the specific node in binary tree and assign value to it;
        getParent(node):
            if the specific node isn't root then return it's parent's node, otherwise return "no parent";
        leftChild(node):
            return the node's left child, if the node has no left child then return "no left child";
        rightChild(node):
            return the node's right child, if the node has no right child then return "no right child";
        insertChild(node, LR, newTree):
            LR is 0 or 1, insert to left or right; newTree is not an empty binary tree and has no right sub-tree; acordding to the LR is 0 or 1, assign newTree to the node's left or right as a new sub-tree, and node's original letf or right sub-tree as the new sub-tree assigned to the newTree's right;
        deleteChild(node, LR):
            LR is 0 or 1, delete the left or sub-tree; cordding to LR, delete the node's left sub-tree or right sub-tree;
        preOrderTraverse(visit):
            traverse the tree in preorder, visit is a function invoked for each node;
        inOrderTraverse(visit):
            traverse the tree in order, visit is a function invoked for each node;
        postOrderTraverse(visit):
            traverse the tree in post order, visit is a function invoked for each node;
        levelOrderTraverse(visit):
            traverse the tree in post order, visit is a function invoked for each node;
    }