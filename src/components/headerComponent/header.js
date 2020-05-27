import React from 'react';
import logo from '../../Assets/images/HelloWorld4.png';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Link to="/"><img className="logo" src={logo} alt="Hackathon Logo"/></Link>
                <div className="spacer"></div>
                <h1>KC Hackathon 2020</h1> 
            </header>
        );
    }
}

export default Header;