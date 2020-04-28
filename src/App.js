import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import  './Assets/css/style.css';

//components 
import Header from "./components/headerComponent/header";
import Menu from './components/menuComponent/menu';
import Fun from './components/funComponent/fun';
import Learn from './components/learnComponent/learn';
import Schedule from './components/scheduleComponent/schedule';



class App extends React.Component {
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

export default App;
