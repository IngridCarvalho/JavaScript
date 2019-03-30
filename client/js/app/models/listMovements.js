class listMovements{

    constructor(){
        this._listMovements = [];
    }

    add(movement){
        this._listMovements.push(movement);
    }

    get movements(){
        return [].concat(this._listMovements); //creates a copy of the array, which don't allow the original to be altered by return
    }

    get total(){
        return this._listMovements
                .reduce(function(total, m){
                        if(m.typeMovement == 'Credit'){
                            total += m.value;//the function reduce will get a value indicate that starts at zero and add to the value of our array, in the end will return a single value that is the sum of all elements.
                        }else{
                            total -= m.value;
                        }
                        return total;
                }, 0);
                    
    }

}