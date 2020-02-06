class MovementsView extends View{
    
    constructor(element){
        super(element);
    }

    // //performs the update of the each insertion in the table
    // update(model){
    //     this._elemento.innerHTML = this.template(model);
    // }

    //template string of the table
    template(model){
        return `<table class="table table-striped">
        <thead>
            <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Description</th>
                <th>Type Movement</th>
                <th>Value</th>
                <th>Opções</th>
            </tr>
        </thead>
        <tbody>
        ${model.movements.map((n, i) => {

            return `
                <tr>
                    <td>${n.id}</td>
                    <td>${DateHelper.dateToText(n.date)}</td>
                    <td>${n.description}</td>
                    <td>${n.typeMovement}</td>
                    <td>${n.value}</td>
                    <td><button class="btn btn-danger" type="button" onclick="movement.delete(${n.id})">Deletar</button></td>
                </tr>
            `
            }).join('')}
        </tbody>
        <tfoot>
            <tr>
            <td colspan="3">TOTAL</td>
                <td>${model.total}</td>
            </tr>
        </tfoot>
        </table>
        `
    }
}