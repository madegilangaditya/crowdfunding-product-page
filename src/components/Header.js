import React from 'react'

const Header = () => {
    return (
        <section className="header banner">
            <header className="site-header">
                <div className="logo-wrapper">
                    <img src="/images/logo.svg" alt="Logo" />
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
