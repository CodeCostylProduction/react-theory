import React from 'react'
import './Car.css'
import propTypes from 'prop-types'
import withClass from "../hoc/withClass";

class Car extends React.Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        if (this.props.index === 0) {
            this.inputRef.current.focus()
        }
    }

    render() {
        const inputClasses = ['input']

        if (this.props.name !== "") {
            inputClasses.push('green')
            if (this.props.name.length > 4) {
                inputClasses.push('bold')
            }
        } else {
            inputClasses.push('red')
        }

        return (
            <React.Fragment>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    ref={this.inputRef}
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

 Car.propTypes = {
     name: propTypes.string,
     year: propTypes.number,
     onChangeName: propTypes.func,
     onDelete: propTypes.func
    }

export default withClass(Car, 'Car')