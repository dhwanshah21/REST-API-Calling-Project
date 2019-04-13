import React, { Component } from 'react';
import './App.css';
import Weather from './Weather';
import Currency from './Currency';
import Norris from './Norris';
import Home from './Home';
import { BrowserRouter, Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="App">
            <header style= {{'textAlign': 'left' }}>
              <ul className="nav-list">
                <li><Link to="/">Home </Link></li>
                <li><Link to="/weather" >Weather   </Link></li>
                <li><Link to='/currency' > Currency </Link></li>
                <li><Link to='/norris' > Chuck Norris Jokes </Link></li>
              </ul>
            </header>
             <Route exact path="/" component={Home} />
             <Route path="/weather" component={Weather} />
             <Route path='/currency' component={Currency} />
             <Route path='/norris' component={Norris} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

