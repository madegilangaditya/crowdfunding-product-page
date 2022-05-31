import React, { useContext } from 'react'
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'
import closeMenu from '../images/icon-close-menu.svg'
import PledgeContext from '../context/PledgeContext'

const Header = () => {
    const { openMenu, menuClicked } = useContext(PledgeContext)

    return (
        <div className="header banner">
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
                            <li className="menu-item"><a href="#a">About</a></li>
                            <li className="menu-item"><a href="#a">Discover</a></li>
                            <li className="menu-item"><a href="#a">Get Started</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div >
    )
}

export default Header
