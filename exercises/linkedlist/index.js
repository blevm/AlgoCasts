// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insertFirst(data) {
    let newNode = new Node(data, this.head)
    this.head = newNode;
  }

  size() {
    let counter = 0;
    let node = this.head

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    while (node.next) {
      node = node.next
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next
    } else {
      return
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next){
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = previous.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    if (this.head) {
      this.getLast().next = new Node(data)
    } else {
      this.head = new Node(data)
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    if (node) {
      while (counter < index) {
        if (node.next) {
          node = node.next
          counter++
        } else {
          return node
        }
      }
    }

    return node;
  }

}

module.exports = { Node, LinkedList };
