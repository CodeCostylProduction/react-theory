import React from 'react'
import car from './Car.css'
import withClass from "../hoc/withClass";

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

        return (
            <React.Fragment>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete this</button>
            </React.Fragment>
        )
    }
}

export default withClass(Car, 'Car')