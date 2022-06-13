const LinkedList = require('./linked-list');
const Fifo = require('./fifo');
const Stack = require('./stack');

let list = new LinkedList();
let stack = new Stack();
let fifo = new Fifo();

console.log("=== Linked List ===");
list.push(1);
list.push(2);
list.push(3);
console.log(list.toString() + " - size: " + list.size());
list.pop();
console.log(list.toString() + " - size: " + list.size());
list.unshift(4);
list.unshift(5);
list.unshift(6);
console.log(list.toString() + " - size: " + list.size());
list.shift()
list.shift()
list.shift()
console.log(list.toString() + " - size: " + list.size());
console.log("======= FIFO ======");
fifo.queue(1);
fifo.queue(2);
fifo.queue(3);
console.log(fifo.toString() + " - size: " + fifo.size());
fifo.dequeue();
console.log(fifo.toString() + " - size: " + fifo.size());
fifo.queue(4);
console.log(fifo.toString() + " - size: " + fifo.size());
console.log("====== STACK ======");
stack.stack(1);
stack.stack(2);
stack.stack(3);
console.log(stack.toString() + " - size: " + stack.size());
stack.unstack();
console.log(stack.toString() + " - size: " + stack.size());
stack.stack(4);
console.log(stack.toString() + " - size: " + stack.size());