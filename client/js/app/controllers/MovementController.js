class MovementController{

    constructor(){
        this._dateLanc = document.querySelector('#date');
        this._description = document.querySelector('#description');
        this._typeMovement = document.getElementById('type');
        this._value = document.querySelector('#value');

        this._listMovement = new listMovements();

        //instance the class MovementsView and passes the div for insert the table
        this._movementsView = new MovementsView(document.querySelector('#tableMovements'));
    }

    //adds the movement in list of movements
    adiciona(){
        this._listMovement.add(this.newMoviment());
        
        this._movementsView.update(this._listMovement);
        //console.log(this._listMovement);
    }

    //add a new movement
    newMoviment(){
        event.preventDefault();

        let date = DateHelper.textToDate(this._dateLanc.value);

        return new Movement(date, this._description.value, this._typeMovement.value, this._value.value);
    }

}