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
      this.insertFirst(item);
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = new Node(item, null);
    }
  }

  find(item) {
    //start at the head
    let currentNode = this.head;

    // if this list is empty;
    if (!this.head) {
      return null;
    }

    while (currentNode.value !== item) {
      //return null if end of the list
      // and the item is not on the list

      if (currentNode.next === null) {
        return null;
      } else {
        //keep looking
        currentNode = currentNode.next;
      }
    }

    // we found it yay
    return currentNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    // if node to be removed is head, make next one head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    //start at the head
    let currentNode = this.head;

    //keep track of previous
    let previousNode = this.head;

    while (currentNode !== null && currentNode.value !== item) {
      //save the previous node
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currentNode.next;
  }

  insertAt(item, index) {
    let nodeIndex = 0;

    let currentNode = this.head;

    while (nodeIndex + 1 !== index) {
      if (currentNode === null) {
        return new Error('index out of range');
      }

      currentNode = currentNode.next;
      nodeIndex++;
    }

    //now that we've targeted the node *before* our insertion, we'll save the 'next' value
    let nextNode = currentNode.next;

    //here we use that stored 'next' value to point to the node *after* our insertion
    currentNode.next = new Node(item, nextNode);
  }

  insertAfter(item, after) {
    const previousNode = this.find(after);

    //previousNode's next has to be item
    const nextNode = previousNode.next;

    previousNode.next = new Node(item, nextNode);
  }

  insertBefore(item, before) {

    //find node that matches 'before'
    let currentNode = this.head;

    //keep track of the node before our match ('previousNode')
    let previousNode = null;

    while (currentNode.value !== before){
      previousNode = currentNode;
      currentNode = currentNode.next;

      //test if we've run out of nodes and didn't find an item
      if(currentNode === null){return new Error('item not found');}
    }

    //test if the item was found as the first item in the linked list
    if(previousNode === null){
      this.head = new Node(item, currentNode);
    }
    else{
      //assign next value of previousNode as our new object, and point our new object to 'before'
      //this is in an else statement to make sure it doesn't trigger when previousNode is null (and won't have a .next property)
      previousNode.next = new Node(item, currentNode);
    }
  }

}

class Node {
  constructor(value, next) {
    this.next = next;
    this.value = value;
  }
}

module.exports = LinkedList;
