'use strict';

const util = require('util');

const LinkedList = require('./linkedlist.js');

function displayList(list) {
    let item = list.head;
    while (item !== null) {
        console.log(item.value);
        item = item.next;
    }
}

function listSize(list) {
    let item = list.head;
    let counter = 0;
    while (item !== null) {
        counter++;
        item = item.next;
    }
    return counter;
}

function isEmpty(list) {
    return list.head === null;
}

function findPrevious(item, list) {
    let currentNode = list.head;

    let previousNode = null;

    while (currentNode.value !== item) {
        previousNode = currentNode;
        currentNode = currentNode.next;

        if (currentNode === null) {
            return new Error('Item not found');
        }
    }
    return previousNode;
}

function findLast(list) {
    let item = list.head;
    while (item.next !== null) {
        item = item.next;
    }

    return item;
}

function main() {
    let SLL = new LinkedList();
    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');

    // console.log(util.inspect(SLL, false, null))
    // console.log(SLL.find('Apollo'))

    // console.log( JSON.stringify(SLL, null, 4) )
    // SLL.remove('squirrel');
    SLL.insertBefore('athena', 'Boomer');
    SLL.insertAfter('hotdog', 'Helo');
    SLL.insertAt('kat', 2);
    SLL.remove('Tauhida');

    // displayList(SLL);
    console.log(util.inspect(SLL, false, null));

    // displayList(SLL);
    // console.log(`This list has ${listSize(SLL)} items`);
    // console.log(isEmpty(SLL));

    console.log(findPrevious('Helo', SLL));
    console.log(findLast(SLL));
}

main();
