import React from 'react'

const Count = ({bigNumber, description}) => {
    return (
        <div className="total-count">
            <p className="big-number">{bigNumber}</p>
            <p className="number-description">{description}</p>
        </div>
    )
}

export default Count
