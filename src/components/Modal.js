import React from 'react'
import { useContext } from 'react'
import CardModal from './CardModal'
import closeModalIcon from '../images/icon-close-modal.svg'
import checkIcon from '../images/icon-check.svg'
import Button from './Button'
import PledgeContext from '../context/PledgeContext'


const Modal = ({onClose}) => {
    const {showModal, openModalClick, thankyou, card, cardClick, cardConfirm} = useContext(PledgeContext)
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
                    <CardModal
                        radioId='support1'
                        cardClass='no-reward'
                        title='Pledge with no reward'
                        description="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
                        qty={0}
                        price={0}
                        onCardClick = {card}
                        contClick = {thankyou}
                    />

                    <CardModal
                        radioId='support2'
                        title='Bamboo Stand'
                        subtitle="Pledge $25 or more"
                        description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
                        qty={101}
                        price={25}
                        onCardClick = {card}
                        contClick = {cardConfirm}
                    />

                    <CardModal
                        radioId='support3'
                        title='Black Edition Stand'
                        subtitle="Pledge $75 or more"
                        description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                        qty={61}
                        price={75}
                        onCardClick = {card}
                        contClick = {cardConfirm}
                    />

                    <CardModal
                        radioId='support4'
                        cardClass='out-of-stock'
                        title='Mahogany Special Edition'
                        subtitle="Pledge $200 or more"
                        description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                        qty={0}
                        price={200}
                        onCardClick = {card}
                        contClick = {cardConfirm}
                    />
                    
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
