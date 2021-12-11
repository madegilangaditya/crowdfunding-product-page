import React from 'react'
import Button from './Button'

const Card = ({cardClass, idCard, title, subtitle, description, qty}) => {
    return (
        <div id={idCard} className={`card ${cardClass ? cardClass : ''}`}>
            <div className="card-title-wrapper">
                <div className="card-title">{title}</div>
                <p className="more">{subtitle}</p>
            </div>
            <div className="description"><p>{description}</p></div>
            <div className="qty-wrapper">
                <div className="qty"><p>{qty} <span>left</span></p></div>
                <Button text={'Select Reward'} />
            </div>
        </div>
    )
}

export default Card
