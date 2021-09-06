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
    deleteHandler (index)  {
        const new_cars = this.state.cars
        new_cars.splice(index, 1)
        this.setState({
            cars: new_cars
        })
    }
    onChangeName (name, index) {
        const car = this.state.cars[index]
        car.name = name
        const new_cars = [...this.state.cars]
        new_cars[index] = car
        this.setState({
            cars: new_cars
        })

    }

    render() {
    const DivStyle = {
      textAlign: 'center'
    }
    let cars = null
      if (this.state.showCars === true) {
          cars = this.state.cars.map((el, index) => {
              return (
                  <Car
                      key = {index}
                      name = {el.name}
                      year = {el.year}
                      onDelete={this.deleteHandler.bind(this, index)}
                      onChangeName={event => this.onChangeName(event.target.value, index)}
                  />
              )
          })}
          else {
              cars = null
          }

    return (
        <div style = {DivStyle}>
          {/*<h1>{this.state.PageTitle}</h1>*/}
          <h1>{this.props.title}</h1>
            <button style = {{
                marginBottom: '10px'
            }}
                    onClick={this.toggleCarsHandler}>Toggle Cars</button>
            <div style={{
                paddingTop: '20px'
            }}>
            { cars }
            </div>
        </div>
    );
  }
}

export default App;
