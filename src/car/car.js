import React from 'react'
import Radium from "radium";
import './car.css'

// eslint-disable-next-line import/no-anonymous-default-export

class Car extends React.Component {
    render() {
        const inputClasses = ['input']

        if (this.props.name !== "") {
            inputClasses.push('green')
            if (this.props.name.length > 4) {
                inputClasses.push('bold')
            }
        }
        else {
            inputClasses.push('red')
        }

        const stylesheet = {
            border: '1px solid #ccc',
            boxShadow: '0 4px 5px 0 rgba(0,0,0, .14)',
            ':hover': {
                border: '2px solid #aaa',
                boxShadow: '0 4px 15px 0 rgba(0,0,0, .25)',
                cursor: 'pointer'
            }
        }

        return (
            <div className="Car" style={stylesheet}>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete this</button>
            </div>
        )    }
}

export default Radium(Car)