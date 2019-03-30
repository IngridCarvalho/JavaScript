class MovementsView {
    
    constructor(elemento){
        this._elemento = elemento;
    }

    //performs the update of the each insertion in the table
    update(model){
        this._elemento.innerHTML = this.template(model);
    }

    //template string of the table
    template(model){
        return `<table class="table table-striped">
        <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Type Movement</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
        ${model.movements.map(n => {

            return `
                <tr>
                    <td>${DateHelper.dateToText(n.date)}</td>
                    <td>${n.description}</td>
                    <td>${n.typeMovement}</td>
                    <td>${n.value}</td>
                </tr>
            `
            }).join('')}
        </tbody>
        <tfoot>
            <tr colspan="3">
                <td>${model.total}</td>
            </tr>
        </tfoot>
        </table>
        `
    }
}