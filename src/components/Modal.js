import React from 'react'
import { useContext } from 'react'
import CardModal from './CardModal'
import closeModalIcon from '../images/icon-close-modal.svg'
import checkIcon from '../images/icon-check.svg'
import Button from './Button'
import PledgeContext from '../context/PledgeContext'


const Modal = () => {
    const {showModal, openModalClick, thankyou, card, cardClick, pledge, cardConfirm} = useContext(PledgeContext)
    return (
        <section className={`modal modal-wrapper ${showModal ?'active' : ''}`}>
            <div className={`pledge-modal wrapper `}>
                <div className="title-modal">
                    <span className='close-modal' onClick={openModalClick}><img src={closeModalIcon} alt="close modal" /></span>
                    <h3>Back this project</h3>
                    <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                </div>
                <div className="cards" onClick={ (e) => {
                            cardClick(e.target.id)
                            console.log(e)
                        }}>
                    

                {pledge.map((item)=>(
                    
                    <CardModal key={item.id} item={item} radioId={`support${item.id}`} contClick={cardConfirm} onCardClick={card}/>
                ))}
                    
                </div>
            </div>
            <div className={`thankyou-wrapper wrapper ${thankyou ? 'active':''}`}>
                <div className="title-modal">
                    <img src={checkIcon} alt="Success Icon" />
                    <h3>Thanks for your support!</h3>
                    <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
                </div>
                
                <Button text={'Got it!'} clicked={openModalClick} />
            </div>
        </section>
    )
}

export default Modal
