import React, { Component } from 'react';
import './App.css';
import Car from './car/car.js';

class App extends Component {
    state = {
        cars: [
            {name: 'Ford', year: 2016},
            {name: 'Mazda', year: 2018},
            {name: 'Toyota', year: 2017}
        ],
        PageTitle: 'Hello world'
    }

    changeTitleHandler = (newTitle) => {
        this.setState({
            PageTitle: newTitle
        })
    }
    handleTitle = (event) => {
        this.setState({
            PageTitle: event.target.value
        })
    }

  render() {
    const DivStyle = {
      textAlign: 'center'
    }
    return (
        <div style = {DivStyle}>
          <h1>{this.state.PageTitle}</h1>
            <input type="text" onChange={this.handleTitle}/>
            <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>
            {this.state.cars.map((el, index) => {
                return (
                    <Car
                    key = {index}
                    name = {el.name}
                    year = {el.year}
                    onChangeTitle={this.changeTitleHandler.bind(this, el.name)}
                    />
                )
            })}
        </div>
    );
  }
}

export default App;
