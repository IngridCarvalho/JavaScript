class ListMovements{

    constructor(trap){
        this._listMovements = [];
        this._trap = trap; //receive a function
    }

    add(movement){
        this._listMovements.push(movement);
        //this._trap(this);
    }

    get movements(){
        return [].concat(this._listMovements); //creates a copy of the array, which don't allow the original to be altered by return
    }

    get total(){
        return this._listMovements
                .reduce((sum, m) => {
                        if(m.typeMovement == 'Credit'){
                            sum += m.value;//the function reduce will get a value indicate that starts at zero and add to the value of our array, in the end will return a single value that is the sum of all elements.
                        }else{
                            sum -= m.value;
                        }
                        return sum;
                }, 0);               
    }

    clearList(){
        this._listMovements = [];
    }



}