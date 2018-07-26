'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new Node(item, this.head);
  }

  insertLast(item) {
    //check if list is empty
    // if it is, insert the item as the only item in the list

    if (this.head === null) {
      this.head = new Node(item, this.head);
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = new Node(item, null);
  }
  
  insertAt(item, index){

    let nodeIndex = 0;
    
    let currentNode = this.head;

    while( nodeIndex +1 !== index){
      if(currentNode === null){return new Error('index out of range');}
      
      currentNode = currentNode.next;
      nodeIndex ++;
    }

    //now that we've targeted the node *before* our insertion, we'll save the 'next' value
    let nextNode = currentNode.next;

    //here we use that stored 'next' value to point to the node *after* our insertion
    currentNode.next = new Node(item, nextNode);

  }
}

class Node {
  constructor(value, next) {
    this.next = next;
    this.value = value;
  }
}

module.exports = LinkedList;
