import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import  '../../Assets/css/style.css';

//components 
import Header from "../headerComponent/header";
import Menu from '../menuComponent/menu';
import Fun from '../funComponent/fun';
import Learn from '../learnComponent/learn';
import Schedule from '../scheduleComponent/schedule';



class Dashboard extends React.Component {
  render() {
    return (
      <Router>
          <Header />
        <div className="App"> 
          <Menu />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/learn" component={Learn} />
          <Route exact path="/fun" component={Fun} />
        </div>
      </Router>
    );
  }
}

export default Dashboard;