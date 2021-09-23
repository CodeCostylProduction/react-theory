import React from 'react'

const withClass = (Component, ClassName) => {
    return (props) => {
        return (
            <div className={ClassName}>
                <Component {...props} />
            </div>
        )
    }
}

export default withClass