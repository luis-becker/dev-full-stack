const LinkedList = require('./linked-list');

let list = new LinkedList();

list.push(1);
list.push(2);
list.push(3);
console.log(list.listToString());
console.log(list.size());
console.log(list.get(0))
console.log(list.get(1))
console.log(list.get(2))
console.log(list.get(3))
list.pop();
list.pop();
list.pop();
list.pop();
console.log(list.listToString());
console.log(list.size());

list.unshift(1);
list.unshift(2);
list.unshift(3);
console.log(list.listToString());
console.log(list.size());
list.shift()
list.shift()
list.shift()
list.shift()
console.log(list.listToString());
console.log(list.size());