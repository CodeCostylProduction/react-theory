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
        PageTitle: 'Hello world',
        showCars: false
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    changeTitleHandler = (newTitle) => {
        this.setState({
            PageTitle: newTitle
        })
    }
  render() {
    const DivStyle = {
      textAlign: 'center'
    }
    let cars = null
      if (this.state.showCars === true) {
          cars =                 this.state.cars.map((el, index) => {
              return (
                  <Car
                      key = {index}
                      name = {el.name}
                      year = {el.year}
                      onChangeTitle={this.changeTitleHandler.bind(this, el.name)}
                  />
              )
          })}
          else {
              cars = null
          }

    return (
        <div style = {DivStyle}>
          <h1>{this.state.PageTitle}</h1>
            <button onClick={this.toggleCarsHandler}>Toggle Cars</button>
            { cars }
        </div>
    );
  }
}

export default App;
