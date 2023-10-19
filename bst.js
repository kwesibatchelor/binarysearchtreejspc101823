// Binary Search Tree 

// Node class represents individual nodes in the binary search tree.
class Node {
    constructor(data, left = null, right = null) {
        this.data = data; // Data contained in the node.
        this.left = left; // Reference to the left child node.
        this.right = right; // Reference to the right child node.
    }
}

// BST class represents the Binary Search Tree.
class BST {
    constructor() {
        this.root = null; // The root of the tree, initially set to null for an empty tree.
    }

    // Add method to insert data into the binary search tree.
    add(data) {
        const newNode = new Node(data); // Create a new node to hold the data.

        if (this.root === null) {
            // If the tree is empty (no root), set the new node as the root.
            this.root = newNode;
        } else {
            // If the tree is not empty, use a recursive searchTree function to find the appropriate location to insert the new node.
            const searchTree = function(node) {
                if (data < node.data) {
                    // If the new data is less than the current node's data, move to the left subtree.
                    if (node.left === null) {
                        // If there is no left child, insert the new node here.
                        node.left = newNode;
                        return;
                    } else {
                        // If there is a left child, continue searching in the left subtree.
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    // If the new data is greater than the current node's data, move to the right subtree.
                    if (node.right === null) {
                        // If there is no right child, insert the new node here.
                        node.right = newNode;
                        return;
                    } else {
                        // If there is a right child, continue searching in the right subtree.
                        return searchTree(node.right);
                    }
                }
            };

            // Start the search process from the root.
            searchTree(this.root);
        }
    }
}


findMin() {
    let  current = this.root;
    while (current.left !==null) {
        current = current.left;
    }
    return current.data;
}

findMax() {
    let current = this.root;
    while (current.right !== null) {
        current = current.right;
    }
    return current.data;
}

find(data) {
    let current = this.root;
    while (current !== null) {
        if (data === current.data) {
            return current; // Data found, return the node.
        } else if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return null; // Data not found in the tree, return null or an appropriate value.
}

// similar to 'find'
isPresent(data) {
    let current = this.root;
    while (current) {
        if (data === current.data) {
            return true; // Data is found, return true.
        }
        if (data < current.data) {
            current = current.left; // Go left to continue the search.
        } else {
            current = current.right; // Go right to continue the search.
        }
    }
    return false; // Data is not found, return false.
}

remove(data) {
    // Helper function to recursively remove the node with the specified data.
    const removeNode = function(node, data) {
        if (node === null) {
            return null;
        }
        
        if (data === node.data) {
            // Node found, decide how to remove it based on child nodes.

            // Case 1: Node has no children (leaf node).
            if (node.left === null && node.right === null) {
                return null;
            }
            
            // Case 2: Node has no left child.
            if (node.left === null) {
                return node.right;
            }
            
            // Case 3: Node has no right child.
            if (node.right === null) {
                return node.left;
            }
            
            // Case 4: Node has two children.
            let tempNode = findMin(node.right); // Find the minimum value in the right subtree.
            node.data = tempNode.data; // Replace the node's data with the minimum value.
            node.right = removeNode(node.right, tempNode.data); // Recursively remove the node with the minimum value from the right subtree.
            return node;
        } else if (data < node.data) {
            // If the data is smaller, search in the left subtree.
            node.left = removeNode(node.left, data);
            return node;
        } else {
            // If the data is larger, search in the right subtree.
            node.right = removeNode(node.right, data);
            return node;
        }
    };
    
    this.root = removeNode(this.root, data); // Start the removal process from the root.
}

// Helper function to find the minimum value in a subtree.
function findMin(node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}

// Usage 
const bst = new BST()
bst.add(5);
bst.add(3);
bst.add(7);

