import React from 'react';
import logo from '../../Assets/images/hackathonlogo.png';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <img className="logo" src={logo} alt="Hackathon Logo"/>
                <div className="spacer"></div>
                <h1>KC Hackathon 2020</h1> 
            </header>
        );
    }
}

export default Header;