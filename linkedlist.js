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
    //   insertAt(item, index=0){

    //     let nodeIndex = 0;
    //     let node = this.head;
    //     while( nodeIndex -1 !== index){
    //       node
    //       nodeIndex ++
    //     }

    //   }
}

class Node {
    constructor(value, next) {
        this.next = next;
        this.value = value;
    }
}

module.exports = LinkedList;
