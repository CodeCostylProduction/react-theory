import React from 'react'

export default class ErrorBoundary extends React.Component {

    state = {
        HasError: false
    }

    componentDidCatch(error, info) {
        this.setState({HasError: true})
    }

    render() {
        if (this.state.HasError === true) {
            return (
                <h1 style={{color: 'red'}}>Catch error</h1>
            )
        }
        else {
            return this.props.children
        }

    }
}