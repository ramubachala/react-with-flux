import React, {Component} from 'react';
import './Counter.css';
import CounterStore from './CounterStore';
import Dispatcher from '../flux/Dispatcher';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.dispatcher = new Dispatcher();
        this.store = new CounterStore(this.dispatcher);
        this.state = this.store.getCounter();
        this.store.addListener((action) => {
            this.setState(this.store.getCounter());
        });
    }
    render(){
        return (
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={() => this.dispatcher.dispatch({type:"+"})}>+</button>
                <button onClick={() => this.dispatcher.dispatch({type:"-"})}>-</button>
            </div>
        )
    }
}

export default Counter;