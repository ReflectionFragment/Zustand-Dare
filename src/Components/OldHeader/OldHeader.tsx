import React from "react";
import './Header.css';
import logo from "../../logo.svg";

const Header = ()=> {
    return (
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    {/*<img src={ogo} className="App-logo" alt="ogo" />*/}
    <p>
        dare your luck
    </p>
    <a
        className="App-link"
        target="_blank"
        // rel="noopener noreferrer"
    >
        Learn
    </a>
</header>) }
export default Header
