import React from 'react';
import './App.css';
import Coin from './Coin';


function App() {
    return (
      <div id="app">
  
        <NavBar />
  
        <Switch>
          <Route path="/Coin">
            <Coin />
          </Route>
  
          <Route path="/Coin">
            <Coin />
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