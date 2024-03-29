/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);

    if(this.first !== null){
      newNode.next = this.first;
    }
    if(this.last === null){
      this.last = newNode;
    }
    this.first = newNode;
    this.size++; 
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.size === 0){
      console.error('Error: Queue has no values to dequeue');
    }
    let val = this.first.val;
    this.first = this.first.next;
    this.size--;
    if(this.size < 2){
      this.last = this.first;
    }
    return val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return (this.size === 0);
  }
}

module.exports = Stack;
