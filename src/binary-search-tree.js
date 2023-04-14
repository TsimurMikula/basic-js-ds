const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }
  root() {
    return this.rootTree;
  }

  add(data) {
    let currNode = this.rootTree;
    let newNode = new Node(data);

    if (!this.rootTree) this.rootTree = newNode;

    while (currNode) {
      if (data === currNode.data) currNode;

      if (data < currNode.data) {
        if (currNode.left) currNode = currNode.left;
        else return currNode.left = newNode;
      }

      if (data > currNode.data) {
        if (currNode.right) currNode = currNode.right;
        else return currNode.right = newNode;
      }
    }
  }

  has(data) {
    let currNode = this.rootTree;
    if (!currNode) return false;
    if (data === currNode.data) return true;

    while (currNode.data != data) {
      if (data < currNode.data) {
        if (currNode.left) {
          currNode = currNode.left;
          if (currNode.data === data) return true;
        }
        else return false;
      }
      if (data > currNode.data) {
        if (currNode.right) {
          currNode = currNode.right;
          if (currNode.data === data) return true;
        }
        else return false;
      }
    }
  }  

  find(data) {
    let currNode = this.rootTree;
    if (!currNode) return null;
    if (data === currNode.data) return currNode;

    while (currNode.data != data) {
      if (data < currNode.data) {
        if (currNode.left) {
          currNode = currNode.left;
          if (currNode.data === data) return currNode;
        }
        else return null;
      }
      if (data > currNode.data) {
        if (currNode.right) {
          currNode = currNode.right;
          if (currNode.data === data) return currNode;
        }
        else return null;
      }
    }
  }  

  remove(data) {
    this.rootTree = removeN(this.rootTree, data);

    function removeN(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeN(node.left, data);
        return node;
      }

      if (data > node.data) {
        node.right = removeN(node.right, data);
        return node;
      }

      if (data === node.data) {
        if (!node.left && !node.right) return node = null;
        if (!node.left) return node = node.right;
        if (!node.right) return node = node.left;
        else {  
          let maxLeft = node.left;
          
          while (maxLeft.right) {
            maxLeft = maxLeft.right;
          }
          node.data = maxLeft.data;
          node.left = removeN(node.left, maxLeft.data);
        }
        return node;
      }
    }
  }

  min() {
    let currNode = this.rootTree;

    while (currNode) {
      if (currNode.left) currNode = currNode.left;
      if (!currNode.left) return currNode.data;
    }
  }

  max() {
    let currNode = this.rootTree;

    while (currNode) {
      if (currNode.right) currNode = currNode.right;
      if (!currNode.right) return currNode.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};