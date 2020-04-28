import React from 'react';
import {Link} from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (
            <div className="Menu">
            <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                <Link  to="/schedule" className="btn button"><button type="button" className="button primary-button upper-case">Schedule</button></Link>
                <Link to="/learn" className="btn button"><button type="button" className="button primary-button upper-case">Learn</button></Link>
                <Link to="/fun" className="btn button"><button type="button" className="button primary-button upper-case">Fun</button></Link>
            </div>
            </div>
        );
    }
}

export default Menu;