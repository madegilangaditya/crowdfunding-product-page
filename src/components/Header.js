import React from 'react'
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'

const Header = () => {
    return (
        <section className="header banner">
            <header className="site-header">
                <div className="logo-wrapper">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="main-navigation-wrap">
                    <nav className="main-navigation">
                        <img src={hamburger} alt="Icon menu" />
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
