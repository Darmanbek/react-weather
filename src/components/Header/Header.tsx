import React from 'react';
import HeaderButton from './HeaderButton/HeaderButton';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import "./header.scss";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <HeaderLogo />
                    <HeaderButton />
                </div>
            </div>
        </header>
    )
}

export default Header;