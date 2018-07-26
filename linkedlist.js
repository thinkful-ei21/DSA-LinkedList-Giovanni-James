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
}

class Node {
    constructor(value, next) {
        this.next = next;
        this.value = value;
    }
}

module.exports = LinkedList;
