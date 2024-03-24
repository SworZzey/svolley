import React from "react";
import logo from "../img/logo.png";
function Header() {
    return (
        <header className="header">
            <div className="contant_header">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="right">
                    <input type="text" placeholder="Название клуба"/>
                </div>
            </div>
        </header>
    )
}

export default Header;