class ProxyFactory{
    static create (object, props, action){
        return new Proxy(object, {
            get(target, prop, receiver){
                if(props.includes(prop) && ProxyFactory._isFunction(target[prop])){
                    return function(){
                        console.log(`method '${prop}' intercepted'`);

                        let back = Reflect.apply(target[prop], target, arguments);

                        action(target);
                    }
                }
                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver){
                let back = Reflect.set(target, prop, value, receiver);
                if(props.includes(prop)){
                    target[prop] = value;
                    action(target);
                }
                return back;
            } 
        })
    }

    static _isFunction(func) {

        return typeof(func) == typeof(Function);
    
    }
    
}