import React from 'react'

import Button from './Button'

const CardModal = ({radioId, cardClass, title, subtitle, description, qty, price, onCardClick,contClick}) => {
    const handleClick = (e) => {
        e.stopPropagation();  //  <------ Here is the magic
        // this.props.onClick();
      }


    return (
        <label htmlFor={radioId}>
            <div className={`card ${cardClass ? cardClass : ''} ${subtitle ? '' : 'no-subtitle'}`} >
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
                {price !== 0 ? 
                <div className="qty-wrapper">
                    <div className="qty"><p>{qty} <span>left</span></p></div>   
                </div> : ""}
                
                {qty !== 0 ? 
                <div className={`pledge-wrapper ${onCardClick === radioId ? 'active' : ''}`} onClick={handleClick}>
                    <p>Enter your pledge</p>
                    <div className="pledge-btn-wrapper">
                        <div className="pledge-input-wrapper">
                            <input type="number" name="pledge" id="" defaultValue={price} />
                        </div>
                        <Button text={'Continue'} clicked={contClick}/>
                    </div>
                </div> : ""}
                
            </div>
        </label>
    )
}

export default CardModal
