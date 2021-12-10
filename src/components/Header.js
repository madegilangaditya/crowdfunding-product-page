import React, { useState } from 'react'
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'
import closeMenu from '../images/icon-close-menu.svg'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const menuClicked = ()=>{
        const menuWrap = document.querySelector('.main-navigation-wrap')
        const bgWrap = document.querySelector('.bg-overlay')
        
        bgWrap.classList.toggle('active')
        menuWrap.classList.toggle('active')
        setOpenMenu(!openMenu)
    }

    return (
        <section className="header banner">
            <header className="site-header">
                <div className="logo-wrapper">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="mobile-menu-icon">
                    <img className="icon-menu" src={!openMenu ? hamburger : closeMenu} alt="Icon menu" onClick={menuClicked} />
                </div>
                <div className="main-navigation-wrap">
                    <nav className="main-navigation">
                        <ul className="main-menu">
                            <li className="menu-item">About</li>
                            <li className="menu-item">Discover</li>
                            <li className="menu-item">Get Started</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </section>
    )
}

export default Header
