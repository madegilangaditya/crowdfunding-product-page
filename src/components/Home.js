import React from 'react'
import logo from '../images/logo-mastercraft.svg'

const Home = () => {
    return (
        <section className="home home-wrapper">

            <section className="wrapper section-1">
                <div>
                    <img src={logo} alt="Logo Mastercraft" className="logo-master" />
                </div>
                
                <h1>Mastercraft Bamboo Monitor Riser</h1>
                <p>A beautiful &amp; handcrafted monitor stand to reduce neck and eye strain.</p>
                <div className="btn-wrap">
                    <a href="#test" className="btn">Back this project</a>
                    <div className="bookmark-wrapper">
                        <span><img src="/images/icon-bookmark.svg" alt="Icon Bookmark" /></span>
                        <a href="#test" className="btn btn-bookmark">Bookmark</a>
                    </div>
                </div>
            </section>

            
            <section className="wrapper section-2">
                <div className="count-wrapper">
                    <div className="total-count">
                        <p className="big-number">$89,914 </p>
                        <p className="number-description">of $100,000 backed</p>
                    </div>
                    <div className="total-count">
                        <p className="big-number">5,007</p>
                        <p className="number-description">total backers</p>
                    </div>
                    <div className="total-count">
                        <p className="big-number">56</p>
                        <p className="number-description">days left</p>
                    </div>
                </div>
                <div className="scroll-bar">
                    <progress id="count" value="89.914" max="100">  </progress>
                </div>
            </section>

            <section className="wrapper section-3">
                <div className="content-wrap">
                    <h2>About this project</h2>
                    <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
                    <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
                </div>
                <div className="content-wrap cards">
                    <div className="card card-item-1">
                        <div className="card-title-wrapper">
                            <div className="card-title">Bamboo Stand</div>
                            <p className="more">Pledge $25 or more</p>
                        </div>
                        <div className="description">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</div>
                        <div className="qty-wrapper">
                            <div className="qty">101 <span>left</span></div>
                            <a href="#btn" className="btn">Select Reward</a>
                        </div>
                    </div>
                    <div className="card card-item-2">
                        <div className="card-title-wrapper">
                            <div className="card-title">Black Edition Stand</div>
                            <p className="more">Pledge $75 or more</p>
                        </div>
                        <div className="description">You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</div>
                        <div className="qty-wrapper">
                            <div className="qty">64 <span>left</span></div>
                            <a href="#btn" className="btn">Select Reward</a>
                        </div>
                    </div>
                    <div className="card card-item-3">
                        <div className="card-title-wrapper">
                            <div className="card-title">Mahogany Special Edition</div>
                            <p className="more">Pledge $200 or more</p>
                        </div>
                        <div className="description">You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</div>
                        <div className="qty-wrapper">
                            <div className="qty">0 <span>left</span></div>
                            <a href="#btn" className="btn">Out of Stock</a>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default Home
