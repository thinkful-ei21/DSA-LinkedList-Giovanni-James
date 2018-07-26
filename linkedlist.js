'use strict';



class LinkedList {

  constructor() {
    this.head = null;

  }

  insertFirst(item){
    this.head = new Node(item, this.head);
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

  constructor(value, next){
    this.next = next;
    this.value = value;
  }
}


module.exports = LinkedList;