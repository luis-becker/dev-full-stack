const LinkedList = require('./linked-list');

class Stack {
    constructor() {
        this.data = new LinkedList();
    }

    stack(value) {
        this.data.push(value);
    }

    unstack() {
        return this.data.pop();
    }

    toString() {
        return this.data.toString();
    }

    size() {
        return this.data.size();
    }
}

module.exports = Stack;