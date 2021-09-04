import React from 'react'

export default (props) => (
    <div style={{
        border: '1px solid #ccc',
        width: '400px',
        display: 'block',
        margin: '0 auto 10px auto'
    }}>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete this</button>
    </div>
)
