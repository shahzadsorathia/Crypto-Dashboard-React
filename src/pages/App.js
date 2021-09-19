import React from 'react';
import Coin from './Coin';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Switch, Route } from 'react-router-dom';

import { Contact } from './contact';

function App() {
    return (
      <div id="app">
  
        <NavBar />
  
        <Switch>
         
  
          <Route path="/Coin">
            <Coin />
          </Route>
          
          <Route path="/Contact">
            <Contact />
          </Route>

          <Route path="/">
            <Coin />
          </Route>
        </Switch>
  
        <Footer />
      </div>
    );
  }
  
  export default App;