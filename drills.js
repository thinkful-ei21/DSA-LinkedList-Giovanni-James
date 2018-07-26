'use strict';

const util = require('util');

const LinkedList = require('./linkedlist.js');

function displayList(list){
    let item= list.head
    while(item !== null){
        console.log(item.value);
        item = item.next;
    }
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
    SLL.insertAt('kat', 2)
    SLL.remove('Tauhida');

    displayList(SLL)
    // console.log(util.inspect(SLL, false, null));

}

main();
