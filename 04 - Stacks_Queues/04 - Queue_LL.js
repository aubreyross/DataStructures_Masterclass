class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enQueue(value) {
    let newNode = new Node(value)

    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  deQueue() {
    if (!this.size) return null

    let removedNode = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removedNode.next;
    }
    this.size--
    return removedNode.value;
  }
}

let queue = new Queue()

queue.enQueue(1)
queue.enQueue(2)
queue.enQueue(3)

queue.deQueue() // 1
// queue.deQueue()
// queue.deQueue()

console.log(queue)