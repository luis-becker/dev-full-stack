const LinkedList = require('./linked-list');

class Fifo {
    constructor() {
        this.data = new LinkedList();
    }

    queue(value) {
        this.data.push(value);
    }

    dequeue() {
        return this.data.shift();
    }

    toString() {
        return this.data.toString();
    }

    size() {
        return this.data.size();
    }
}

module.exports = Fifo;