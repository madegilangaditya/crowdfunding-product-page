import React from 'react'
import Button from './Button'


const Card = ({cardClass, idCard, title, subtitle, description, qty, clicked, btnClass}) => {
    const checkRadio = () =>{
        document.querySelector(`#${btnClass}`).checked = true;
        if(document.querySelector(`#${btnClass}`).checked === true){
            document.querySelector(`label[for="${btnClass}"] .pledge-wrapper`).classList.add('active');
        }else{
            document.querySelector(`label[for="${btnClass}"] .pledge-wrapper`).classList.remove('active');
        }
        console.log(document.querySelector(`#${btnClass}`).checked);
        // if(document.querySelector('label').htmlFor === btnClass){
           
        // }
    }
    
    return (
        <div id={idCard} className={`card ${cardClass ? cardClass : ''}`} onClick={checkRadio}>
            <div className="card-title-wrapper">
                <div className="card-title">{title}</div>
                <p className="more">{subtitle}</p>
            </div>
            <div className="description"><p>{description}</p></div>
            <div className="qty-wrapper">
                <div className="qty"><p>{qty} <span>left</span></p></div>
                <Button text={'Select Reward'} clicked={clicked} addClass={btnClass}/>
            </div>
        </div>
    )
}

export default Card
