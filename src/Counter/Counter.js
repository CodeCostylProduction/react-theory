import React, {Component} from 'react'
import Auxiliary from "../hoc/auxilliary";

export default class Counter extends Component {

    state = {
        counter: 0
    }

    addCounter = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {
        return (
            <>
                <h2>Counter: {this.state.counter}</h2>
                <button onClick={this.addCounter.bind()}>+</button>
                <button onClick={() => {this.setState({counter: this.state.counter - 1})}}>-</button>
                <hr></hr>
            </>
        )
        // return [
        //         <h2 key={1}>Counter: {this.state.counter}</h2>,
        //         <button key={2} onClick={this.addCounter.bind()}>+</button>,
        //         <button key={3} style={{
        //             marginBottom: '10px'
        //         }}
        //                 onClick={() => {this.setState({counter: this.state.counter - 1})}}>-</button>,
        //     ]
    }
}