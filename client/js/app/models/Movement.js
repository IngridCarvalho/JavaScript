class Movement{

    constructor(id, date, description, typeMovement, value){
        this._id = id;
        this._date = new Date(date.getTime());
        this._description = description;
        this._typeMovement = typeMovement;
        this._value = value;
    }

    get id(){
        return this._id;
    }

    get date(){
        return new Date(this._date.getTime());
    }

    get description(){
        return this._description;
    }

    get typeMovement(){
        return this._typeMovement;
    }

    get value(){
        return parseFloat(this._value);
    }

}