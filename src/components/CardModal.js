import React from 'react'
import Button from './Button'

const CardModal = ({radioId, cardClass, title, subtitle, description, qty, price}) => {
    return (
        <label htmlFor={radioId}>
            <div className={`card ${cardClass ? cardClass : ''} ${subtitle ? '' : 'no-subtitle'}`}>
                <div className='input-wrapper'>
                    <div className='radio-wrapper'>
                        <input id={radioId} type="radio" name='support' value={price}/>
                    </div>
                    <div className="card-title-wrapper">
                        <div className="card-title">{title}</div>
                        {subtitle?<p className="more">{subtitle}</p> : ''}
                        
                    </div>
                </div>    
                <div className="description"><p>{description}</p></div>
                <div className="qty-wrapper">
                    <div className="qty"><p>{qty} <span>left</span></p></div>   
                </div>
                <div className="pledge-wrapper">
                    <p>Enter your pledge</p>
                    <div className="pledge-btn-wrapper">
                        <div>
                            <p>$ <span>{price}</span></p>
                        </div>
                        <Button text={'Continue'} />
                    </div>
                </div>
            </div>
        </label>
    )
}

export default CardModal
