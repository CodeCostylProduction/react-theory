import React, {Component} from 'react'
import {bindReporter} from "web-vitals/dist/modules/lib/bindReporter";

export default class Counter extends Component {

    state = {
        counter: 0
    }

    addCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        // return (
        //     <div style={{
        //         marginBottom: '10px'
        //     }}>
        //         <h2>Counter: {this.state.counter}</h2>
        //         <button onClick={this.addCounter.bind()}>+</button>
        //         <button onClick={() => {this.setState({counter: this.state.counter - 1})}}>-</button>
        //     </div>
        // )
        return [
                <h2 key={1}>Counter: {this.state.counter}</h2>,
                <button key={2} onClick={this.addCounter.bind()}>+</button>,
                <button key={3} style={{
                    marginBottom: '10px'
                }}
                        onClick={() => {this.setState({counter: this.state.counter - 1})}}>-</button>,
            ]
    }
}