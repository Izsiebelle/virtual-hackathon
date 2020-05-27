import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import  './Assets/css/style.css';

//components 
import Dashboard from './components/dashboardComponent/Dashboard';
import Landingpage from './components/landingpageComponent/Landingpage';



class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" strict component={Landingpage} />
          <Route exact path="/dashboard" strict component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
