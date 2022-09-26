// REMOVE ITEM AT SPECIFIC INDEX
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
    const newNode = new Node(value)

    if(!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if(!this.length) return undefined
    
    let current = this.head
    let newTail = current

    while(current.next) {
      newTail = current
      current = current.next
    }
      this.tail = newTail
      newTail.next = null
      this.length--
      if(!this.length) {
        this.tail = null
        this.head = null
      }
      return current.value
  }

  shift() {
    if(!this.length) return undefined
    let removedItem = this.head
    this.head = removedItem.next
    this.length--
    if(!this.length) this.tail = null
    return removedItem
  }

  unshift(value) {
    const newNode = new Node(value)
    if(!this.length) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
  
    this.length++
    return this
  }

  get(index) {
    if(index < 0 || index >= this.length) return null
    
    let current = this.head
    let counter = 0

    while(counter !== index) {
      current = current.next
      counter++
    }

    return current
  }

  set(index, newvalue) {
    const node = this.get(index)
    if(!node) return false
    node.value = newvalue
    return true
  }

  insert(index, value) {
    if(index < 0 || index > this.length) return false
    if(index === this.length) return !!this.push(value)
    if(index === 0) return !!this.unshift(value)

    let previousNode = this.get(index - 1)
    let newNode = new Node(value)

    newNode.next = previousNode.next
    previousNode.next = newNode

    this.length++

    return true
  }

  remove(index) {
    if(index < 0 || index >= this.length) return undefined
    if(index === this.length - 1) return this.pop()
    if(index === 0) return this.shift()
 
    const previousNode = this.get(index - 1)
    const removed = this.get(index)
 
    previousNode.next = removed.next
 
    this.length--
 
    return removed
  }
}

let list = new SinglyLinkedList()

list.push('zero')
list.push('one') // REMOVING THIS
list.push('two')
list.push('tree')
list.push('four')
list.push('five')

list.remove(1)

console.log(list)