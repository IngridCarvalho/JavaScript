class DateHelper{

    constructor(){
        throw new Error('DateHelper não pode ser instanciada');
    }

    static textToDate(text){

        if(!/\d{4}-\d{2}-\d{2}/.test(text)){
            throw Error('A data deve estar no formato YYYY-MM-DD');
        }

        return new Date(... text.split('-')
                    .map((item, indice) => {
                        return item-indice%2;
                    }));
        
        
    }

    static dateToText(info){
        return `${info.getDate()}/${info.getMonth() + 1}/${info.getFullYear()}`;
    }
}