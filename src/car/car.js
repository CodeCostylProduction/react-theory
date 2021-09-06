import React from 'react'
import Radium from "radium";
import './car.css'

// eslint-disable-next-line import/no-anonymous-default-export
const Car = props => {
    const inputClasses = ['input']

    if (props.name !== "") {
        inputClasses.push('green')
        if (props.name.length > 4) {
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
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input
            type="text"
            onChange={props.onChangeName}
            value={props.name}
            className={inputClasses.join(' ')}
        />
        <button onClick={props.onDelete}>Delete this</button>
    </div>
)}

export default Radium(Car)