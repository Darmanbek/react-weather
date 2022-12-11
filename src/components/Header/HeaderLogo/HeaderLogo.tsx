import React from 'react';
import { Logo } from "../../../assets";
import "./headerLogo.scss";

const HeaderLogo: React.FC = () => {
    return (
        <div className="header-content">
            <div className="header-logo">
                <a href="/"><img src={Logo} alt="RW-logo" /></a>
            </div>

            <div className="header-title">
                <h1>React Weather</h1>
            </div>
        </div>
    )
}

export default HeaderLogo;