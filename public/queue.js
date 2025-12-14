export class Queue{
    constructor (){
        this.items = [];
    }

    enqueue(el){
        this.items.push(el);
    }

    dequeue(){
        return this.items.shift();
    }

    print(){
        return this.items.join(",");
    }

    isEmpty(){
        return this.items.length === 0;
    }
}