
class MinBinaryHeap {
    constructor() {
      this.values = [];
    }
  
    insert(val) {
      this.values.push(val);
      this.bubbleUp();
    }
  
    extractMin() {
      const min = this.values[0];
      const lastChild = this.values.pop();
      if (this.values.length > 0) {
        // replace the min node with the last child
        this.values[0] = lastChild;
        // find the correct spot for the new min
        this.sinkDown();
      }
      return min;
    }
  
    bubbleUp() {
      let index = this.values.length - 1; // index last pushed val
  
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2); // gets the parent index
        const parent = this.values[parentIndex];
        const value = this.values[index];
        if (value >= parent) break; // if the value is greater than the parent then break
        // if the parent is greater than the value
        // swap the parent with the value
        this.values[parentIndex] = value;
        this.values[index] = parent;
        // update the index with the new index (parent index)
        index = parentIndex;
      }
    }
  
    sinkDown() {
      let index = 0; // starts off at the min's index
      const currNode = this.values[index]; // current min value
      const length = this.values.length;
  
      while (index < this.values.length) {
        const leftChildIndex = 2 * index + 1; // formula to get left child's index: 2n + 1
        const leftChild = this.values[leftChildIndex];
        const rightChildIndex = 2 * index + 2; // formula to get right child's index: 2n + 2
        const rightChild = this.values[rightChildIndex];
        let swapIndex = null; // starts off with no swapping needed
  
        if (leftChildIndex < length) {
          // if the leftChildIndex is in bounds (smaller than the heap length)
          if (leftChild < currNode) {
            // if the leftChild value is smaller than the current min's value
            swapIndex = leftChildIndex;
          }
        }
  
        if (rightChildIndex < length) {
          // if the rightChildIndex is in bounds (smaller than the heap length)
          if (
            (swapIndex === null && rightChild < currNode) ||
            (swapIndex !== null && rightChild < leftChild)
          ) {
            // if the swap index is null (the leftChild value wasn't smaller than the current min value)
            // and the rightChild value is smaller than the current min's value
            // OR
            // if there is a swap index (the leftChild value was smaller than the current min value)
            // and the rightChild value is smaller than the leftChild value
            // THEN
            // set the swapIndex to the rightChildIndex
            swapIndex = rightChildIndex;
          }
        }
  
        // if a swap index wasn't set then both the leftChild and rightChild value is greater than the current min value
        if (swapIndex === null) break;
  
        // swap the nodes
        this.values[index] = this.values[swapIndex];
        this.values[swapIndex] = currNode;
  
        // update the index with the swapped index and continue sinking down
        index = swapIndex;
      }
    }
  }
  
  const minBinaryHeap = new MinBinaryHeap();
  minBinaryHeap.insert(5);
  minBinaryHeap.insert(1);
  minBinaryHeap.insert(4);
  minBinaryHeap.extractMin();
  console.log(minBinaryHeap.values);

  minBinaryHeap.insert(2);
  minBinaryHeap.insert(3);
  minBinaryHeap.insert(6);
  minBinaryHeap.extractMin();
  console.log(minBinaryHeap.values);
  
  minBinaryHeap.insert(7);
  minBinaryHeap.extractMin();
  console.log(minBinaryHeap.values);
