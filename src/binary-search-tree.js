const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root_ = null;
  }
  root() {
    return this.root_;
  }

  add(data) {
    this.root_ = addWithin(this.root_, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data > node.data) {
        node.right = addWithin(node.right, data);
      } else {
        node.left = addWithin(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.root_, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data > node.data) {
        return searchWithin(node.right, data);
      } else {
        return searchWithin(node.left, data);
      }
    }
  }
  find(data) {
    return findNod(this.root_, data);

    function findNod(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data > node.data) {
        return findNod(node.right, data);
      } else {
        return findNod(node.left, data);
      }
    }
  }

  remove(data) {
    this.root_ = removeNode(this.root_, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.root_) {
      return null;
    }

    let minNode = this.root_;
    while (minNode.left) {
      minNode = minNode.left;
    }

    return minNode.data;
  }

  max() {
    if (!this.root_) {
      return null;
    }

    let maxNode = this.root_;
    while (maxNode.right) {
      maxNode = maxNode.right;
    }

    return maxNode.data;
  }
}


module.exports = {
  BinarySearchTree
};