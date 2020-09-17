import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>

          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>

          <Route path="/login">
          <Login></Login>
          </Route>

          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>

        </Switch>
        {/*react-router library*/}
        {/*localhost.com*/}
        {/*localhost.com/checkout*/}
        {/*localhost.com/login*/}
      </div>



    </BrowserRouter>
  );
}

export default App;

