import React from 'react'

import Button from './Button'

const CardModal = ({item, radioId, contClick, onCardClick}) => {
    const handleClick = (e) => {
        e.stopPropagation();  //  <------ Here is the magic
        // this.props.onClick();
      }


    return (
        <label htmlFor={radioId}>
            <div  className={`card ${item.id === 1 ? 'no-reward' : ''} ${item.subtitle ? '' : 'no-subtitle'} ${item.qty === 0 ? 'out-of-stock':''}`} >
                <div className='input-wrapper'>
                    <div className='radio-wrapper'>
                        <input id={radioId} type="radio" name='support' value={item.price}/>
                    </div>
                    <div className="card-title-wrapper">
                        <div className="card-title">{item.title}</div>
                        {item.subtitle?<p className="more">{item.subtitle}</p> : ''} 
                    </div>
                </div>    
                <div className="description">
                    <div className="card-title-wrapper desktop">
                        <div className="card-title">{item.title}</div>
                        {item.subtitle?<p className="more">{item.subtitle}</p> : ''}
                        {item.price !== 0 ? 
                        <div className="qty-wrapper desktop">
                            <div className="qty"><p>{item.qty} <span>left</span></p></div>   
                        </div> : ""} 
                    </div>
                    <p>{item.description}</p>
                </div>
                {item.price !== 0 ? 
                <div className="qty-wrapper">
                    <div className="qty"><p>{item.qty} <span>left</span></p></div>   
                </div> : ""}
                
                {item.qty !== 0 ? 
                <div className={`pledge-wrapper ${onCardClick === radioId ? 'active' : ''}`} onClick={handleClick}>
                    <p>Enter your pledge</p>
                    <div className="pledge-btn-wrapper">
                        <div className="pledge-input-wrapper">
                            <input type="number" name="pledge" id="" defaultValue={item.price} />
                        </div>
                        <Button text={'Continue'} clicked={contClick}/>
                    </div>
                </div> : ""}
                
            </div>
        </label>
    )
}

export default CardModal
