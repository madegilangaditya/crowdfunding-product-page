import React from 'react'
import Button from './Button'


const Card = ({item, clicked, btnClass}) => {
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
        <div key={item.id} id={`card-item-${item.id}`} className={`card card-item-${item.id ? item.id : ''} ${item.qty === 0 ? 'out-of-stock':''}`} onClick={checkRadio}>
            <div className="card-title-wrapper">
                <div className="card-title">{item.title}</div>
                <p className="more">{item.subtitle}</p>
            </div>
            <div className="description"><p>{item.description}</p></div>
            <div className="qty-wrapper">
                <div className="qty"><p>{item.qty} <span>left</span></p></div>
                <Button text={'Select Reward'} clicked={clicked} addClass={btnClass}/>
            </div>
        </div>
    )
}

export default Card
