import React from 'react'
import './Header.css'

function Header(props) {
    const nav = props.nav
    
    const navItems = nav.navItems.map( obj => {
        return (
            <span key={ obj.title } className="nav-item">{ obj.title }</span>
        )
    });

    return (
        <div className="header">
            <div className="header-wrapper">
                <div className="navigation">
                    { navItems }
                </div>

                <div className="social">

                </div>
            </div>
        </div>
    );
}

export default Header;