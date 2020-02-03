class View{
    constructor(element){
        this._element = element;
    }

    template() {
        throw new Error('The method need implemented');
    }

    update(model){
        this._element.innerHTML = this.template(model);
    }
}