class MovementService{

    constructor(){
        this._http = new HttpService();
    }

    //takes the movements of the api and returns a movement
    getMovements(){
            return this._http
                .get('http://localhost:3030/movements')
                .then(movements => {
                        return movements.map(object => new Movement(object.id, new Date(object.date), object.description, object.type, object.value));
                    }
                )
                .catch(error => {
                    console.log(error);
                    throw new('Não foi possível obter os movimentos');
                });
    }

    addMovement(movement){
        return this._http
            .post('http://localhost:3030/movements', movement)
            .then(teste => {
                    return console.log(teste);
            });
    }

    deleteMovement(id){
        return this._http
            .delete(`http://localhost:3030/movements/${id}`)
            .then(teste => {
                return console.log(teste);
            });
    }


}
