import React from 'react';
import {Link} from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (
            <div className="Menu">
            <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                <Link to="/schedule" ><button type="button" className="btn upper-case">Schedule</button></Link>
                <Link to="/learn"><button type="button" className="btn upper-case">Learn</button></Link>
                <Link to="/fun"><button type="button" className="btn upper-case">Fun</button></Link>
            </div>
            </div>
        );
    }
}

export default Menu;