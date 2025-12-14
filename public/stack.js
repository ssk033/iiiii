export class Stack{
    constructor(){
        this.items = [];
    }

    push(el){
        this.items.push(el);
    }
    pop(){
        return this.items.pop();
    }
    print(){
        return this.items.join(",");
    }
    isEmpty(){
        return this.items.length === 0;
    }
}