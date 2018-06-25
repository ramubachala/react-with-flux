import {Store} from "../flux";

class CounterStore extends Store {
    __onDispatch(action){
        switch (action.type) {
            case "+":
                this.__state.value += 1
                this.__emitChange();
                break;
            case "-":
                this.__state.value -= 1
                this.__emitChange();
                break;
        
            default:
                break;
        }
    }
    getInitialState() {
        return (localStorage["countervalue"] ? localStorage["countervalue"] : { value: 0 }) ;
    }
    getCounter() {
        return this.__state;
    }
}

export default CounterStore;