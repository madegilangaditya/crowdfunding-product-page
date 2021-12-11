import React from 'react'
import Button from './Button'

const Modal = ({onShow}) => {
    

    return (
        <section className={`modal modal-wrapper ${onShow ?'active' : ''}`}>
            <section className="wrapper">
                <div className="title-modal">
                    <h3>Back this project</h3>
                    <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                </div>
                <div className="cards" >
                    <label htmlFor="support1">
                        <div className={`card `} htmlFor="support1">
                            <div className='input-wrapper'>
                                <div className='radio-wrapper'>
                                    <input id="support1" type="radio" name='support' value='0'/>
                                </div>
                                <div className="card-title-wrapper">
                                    <div className="card-title"> Pledge with no reward</div>
                                    <p className="more"></p>
                                </div>
                            </div>    
                            <div className="description"><p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p></div>
                            <div className="qty-wrapper">
                                <div className="qty"><p> <span>left</span></p></div>
                                <Button text={'Select Reward'} />
                            </div>
                        </div>
                    </label>
                    

                    <label htmlFor="support2">
                        <div className={`card `} htmlFor="support2">
                            <div className='input-wrapper'>
                                <div className='radio-wrapper'>
                                    <input id="support2" type="radio" name='support' value='0'/>
                                </div>
                                <div className="card-title-wrapper">
                                    <div className="card-title"> Pledge with no reward</div>
                                    <p className="more"></p>
                                </div>
                            </div>    
                            <div className="description"><p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p></div>
                            <div className="qty-wrapper">
                                <div className="qty"><p> <span>left</span></p></div>
                                <Button text={'Select Reward'} />
                            </div>
                        </div>
                    </label>
                    
                    <div className="card card-item2"></div>
                    <div className="card card-item3"></div>
                    <div className="card card-item4"></div>
                </div>
            </section>
        </section>
    )
}

export default Modal
