import React from 'react'
import './car.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
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
    return (
    <div className="Car">
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