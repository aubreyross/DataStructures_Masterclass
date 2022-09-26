// ADD node to END of linked list
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if(!this.head) {      //if there is no head (empty list, which it is)
      this.head = newNode; //set the tail + head to be the newly created node
      this.tail = newNode;
    } else {              //otherwise take the current tail, and set the new node to tail.
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++     //increment length of list by for each newly added node.
    return this       //return the list 
  }
}

let list = new SinglyLinkedList()

list.push(1)
list.push(3)
list.push(5)
list.push(7)

console.log(list)


// SinglyLinkedList {head: Node, tail: Node, length: 4}
// head: Node {value: 1, next: Node}
//   next: Node {value: 3, next: Node}
//     next: Node {value: 5, next: Node}
//       tail: Node {value: 7, next: null}


//PUSH
//The 1st time we push a node it checks if the head exists. Since we created an empty list (no head), the created node is set as head + tail.
//The 2nd time a value is pushed, the current tail’s next node is set to the next node, which ends up being the same as: this.head.next = newNode. 
//the tail gets updated to point to the newNode.
//Afterwards every push just updates the previous tail.next to point to the new node (the new tail).
