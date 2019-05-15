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
}