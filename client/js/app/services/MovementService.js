class MovementService{
    constructor(){
        this._http = new HttpService();
    }

    //takes the movements of the api and returns a movement
    getMovements(){
            return this._http
                .get('http://localhost:3030/movements')
                .then(
                    movements => {
                    return movements.map(objeto => new Movement(new Date(objeto.date), objeto.description, objeto.type, objeto.value));
                    }
                )
                .catch(erro => {
                    console.log(erro);
                    throw new('Não foi possível obter os movimentos');
                })
    }


}
