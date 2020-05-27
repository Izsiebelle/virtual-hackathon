import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Assets/images/HelloWorld4.png';

class Landingpage extends React.Component {
    render() {
        return (
            <div className="landingpage">
                <h1>"Hello, World!" Hackathon</h1>
                <div className="landingpage-btns" role="group" aria-label="Basic example">
                    <Link  to="/dashboard" className="btn "><button type="button" className="button primary-button upper-case">Signin</button></Link>
                    <Link to="/signup" className="btn"><button type="button" className="button primary-button upper-case">Signup</button></Link>
                </div>
            </div>
        );
    }
}

export default Landingpage;