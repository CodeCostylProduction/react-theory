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
    const cars = this.state.cars
    return (
        <div style = {DivStyle}>
          <h1>{this.state.PageTitle}</h1>
            <input type="text" onChange={this.handleTitle}/>
            <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>

            <Car
                name={cars[0].name}
                year={cars[0].year}
                onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
            />
            <Car
                name={cars[1].name}
                year={cars[1].year}
                onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
            />
            <Car
                name={cars[2].name}
                year={cars[2].year}
                onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
            />
        </div>
    );
  }
}

export default App;
