class LinkedList {
    constructor(){
        this.last = this.first = null;
        this.count = 0;
    }

    // transforms list to string similar to an array eg.: '[x,y,x]'
    toString(){ 
        let s = '';
        let aux = this.first;
        while(aux!=null){
            s += aux.value + ',';
            aux = aux.next;
        }
        return '['+s.slice(0, -1)+']';
    }

    // prints all details of the list and nodes for debbuging
    inspect(){
        console.log('======= LIST =======');
        console.log(this);
        let aux = this.first;
        while(aux!=null){
            console.log('---- NODE ----');
            console.log(aux);
            aux = aux.next;
        }
    }

    // adds value to the end of the list
    push(value){
        let node = new Node(value);
        if(!this.first)
            this.last = this.first = node;
        else{
            node.prev = this.last;
            this.last.next = node;
            this.last = node;
        }
        this.count++;
    }

    // adds value to beggining of the list
    unshift(value) {
        let node = new Node(value);
        if(!this.first)
            this.last = this.first = node;
        else {
            node.next = this.first;
            this.first.prev = node;
            this.first = node;
        }
        this.count++;
    }

    // removes value of the end of the list and returns it
    pop(){
        let node = this.last;
        if(this.first===this.last) 
            this.last = this.first = null;
        else{
            this.last = this.last.prev;
            this.last.next = null;
        }
        if(this.count>0) this.count--;
        return node;
    }

    // removes value of the beggining of the list and returns it
    shift() {
        let node = this.first;
        if(this.first===this.last) 
            this.last = this.first = null;
        else{
            this.first = this.first.next;
            this.first.prev = null;
        }
        if(this.count>0) this.count--;
        return node;
    }

    // returns number of elements in the list
    size() {
        return this.count;
    }

    // returns value in a specific position in the list
    get(value) {
        let aux = this.first;
        for(var i=0; aux!=null; i++) {
            if(i==value) return aux.value;
            aux = aux.next;
        }
        return aux;
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.prev = this.next = null;
    }
}

module.exports = LinkedList;