class HttpService{

    //using fetch api

    _handleError(res){
        if(!res.ok) throw new Error(res.statusText);
        return res;
    }

    get(url){
        return fetch(url)
            .then(res => this._handleError(res))
            .then(res => res.json());
    }

    post(url, data){
        return fetch(url, {
            headers: { 'Content-type' : 'application/json'},
            method: 'post',
            body: JSON.stringify(data)
        })
        .then(res => this._handleError(res));
    }

    delete(url){
        return fetch(url, {
                method: 'delete',
            })
            .then(res => this._handleError(res))
            .then(res => res.json());
    }

}