export default class Dispatcher {
    constructor() {
        this.__listeners = []
    }
    register(listener){
        this.__listeners.push(listener)
    }
    dispatch(action){
        this.__listeners.forEach(listener=>listener(action));
    }
};
