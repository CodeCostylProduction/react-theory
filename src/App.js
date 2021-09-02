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

    changeTitleHandler = () => {
        console.log('Clicked')
    }

  render() {
    const DivStyle = {
      textAlign: 'center'
    }
    const cars = this.state.cars
    return (
        <div style = {DivStyle}>
          <h1>{this.state.PageTitle}</h1>

            <button onClick={this.changeTitleHandler}>Change title</button>

            <Car name={cars[0].name} year={cars[0].year}/>
            <Car name={cars[1].name} year={cars[1].year}/>
            <Car name={cars[2].name} year={cars[2].year}/>
        </div>
    );
  }
}

export default App;
