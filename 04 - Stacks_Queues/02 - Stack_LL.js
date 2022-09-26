class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

//when we want to add a node to the stack we call the push method 
  push(value) {
    let newNode = new Node(value)
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first.next = temp;
    }
    return this.size++;
  }

//when we want to remove the last node off the stack we call the pop method
  pop() {
    if (!this.size) return null
    if(!this.first) return null;
    var temp = this.first;
    if(this.first === this.last){
        this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.pop())
