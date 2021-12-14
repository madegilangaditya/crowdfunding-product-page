import React from 'react'
import CardModal from './CardModal'

const Modal = ({onShow}) => {
    

    return (
        <section className={`modal modal-wrapper ${onShow ?'active' : ''}`}>
            <section className="wrapper">
                <div className="title-modal">
                    <h3>Back this project</h3>
                    <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                </div>
                <div className="cards" >
                    <CardModal
                        radioId='support1'
                        cardClass='no-reward'
                        title='Pledge with no reward'
                        description="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
                        qty='0'
                        price={0}
                    />

                    <CardModal
                        radioId='support2'
                        title='Bamboo Stand'
                        subtitle="Pledge $25 or more"
                        description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
                        qty='101'
                        price={25}
                    />

                    <CardModal
                        radioId='support3'
                        title='Black Edition Stand'
                        subtitle="Pledge $75 or more"
                        description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                        qty='64'
                        price='75'
                    />

                    <CardModal
                        radioId='support3'
                        cardClass='out-of-stock'
                        title='Mahogany Special Edition'
                        subtitle="Pledge $200 or more"
                        description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                        qty='0'
                        price={200}
                    />
                    
                </div>
            </section>
        </section>
    )
}

export default Modal
