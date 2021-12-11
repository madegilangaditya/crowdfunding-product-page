import React from 'react'
import logo from '../images/logo-mastercraft.svg'
import bookmark from '../images/icon-bookmark.svg'
import Button from './Button'
import Count from './Count'
import Cards from './Cards'

const Home = ({btnClick}) => {
    return (
        <section className="home home-wrapper">

            <section className="wrapper section-1">
                <div className="img-wrap">
                    <img src={logo} alt="Logo Mastercraft" className="logo-master" />
                </div>
                
                <h1>Mastercraft Bamboo Monitor Riser</h1>
                <p>A beautiful &amp; handcrafted monitor stand to reduce neck and eye strain.</p>
                <div className="btn-wrap">
                    <Button idBtn={'openModal'} text={'Back this project'} clicked={btnClick} />
                    <div className="bookmark-wrapper">
                        <span><img src={bookmark} alt="Icon Bookmark" /></span>
                        <Button text={'Bookmark'} addClass={'btn-bookmark'} />
                    </div>
                </div>
            </section>

            
            <section className="wrapper section-2">
                <div className="count-wrapper">
                    <Count 
                        bigNumber="$89,914"
                        description="of $100,000 backed"
                    />
                    
                    <Count 
                        bigNumber="5,007"
                        description="total backers"
                    />

                    <Count 
                        bigNumber="56"
                        description="days left"
                    />
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

                <Cards/>

            </section>

        </section>
    )
}

export default Home
