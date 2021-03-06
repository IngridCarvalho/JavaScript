class MovementController{

    constructor(){
        this._dateLanc = document.querySelector('#date');
        this._description = document.querySelector('#description');
        this._typeMovement = document.getElementById('type');
        this._value = document.querySelector('#value');

        //instance the class MovementsView and passes the div for insert the table
        this._movementsView = new MovementsView(document.querySelector('#tableMovements'));

        //using Proxy and Bind
        this._listMovement = new Bind(
            new ListMovements(),
            this._movementsView,
            'adiciona', 'esvazia'
        );

        this._messageView = new MessageView(document.querySelector('#message'));
        
        this._message = new Bind(
            new Message(),
            this._messageView,
            'text'
        );

        this._movementService = new MovementService();
        this.loadMovements();                   
    }

    //adds the movement in list of movements
    create(){
        this.addMovement(this.newMovement());

        this._listMovement.add(this.newMovement());
        
        this._movementsView.update(this._listMovement);

        this.cleanForm();
    }

    delete(id){
        console.log(id);
        this._listMovement.remove(id);
        this._movementsView.update(this._listMovement);

        this._message.text = 'Removido movimentações com sucesso';
        this._messageView.update(this._message);

        this.deleteMovement(id);
    }

    //add a new movement
    newMovement(){
        event.preventDefault();

        let date = DateHelper.textToDate(this._dateLanc.value);
        let id;
        if(this._listMovement.movements.length != 0){
            id = this._listMovement.movements[this._listMovement.movements.length-1].id + 1;
        }else{
            id = 1;
        }

        return new Movement(id, date, this._description.value, this._typeMovement.value, this._value.value);
    }

    //clean the form
    cleanForm(){
        this._dateLanc.value = '';
        this._description.value = '';
        this._typeMovement.value = 'Credit';
        this._value.value = '';
        this._dateLanc.focus();
    }

    //loads the movements to the table
    loadMovements(){
      
      this._movementService.getMovements() 
              .then(movements => {
                  movements.forEach(movement => {
                    this._listMovement.add(movement); //add the list of movements
                    this._movementsView.update(this._listMovement); //update table
                  });
              })
              .catch(erro => {
                console.log(erro);
                throw new('Não foi possível obter os movimentos no loadmovements');
            });
    }

    addMovement(movement){
        this._movementService.addMovement(movement)
            .then(console.log);
    }

    deleteMovement(id){
        this._movementService.deleteMovement(id)
            .then(console.log);
    }

}