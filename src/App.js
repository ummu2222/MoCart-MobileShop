import React,{Component} from 'react';
import {Switch , Route}  from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal';

import 'bootstrap/dist/css/bootstrap.css';

//38

function App() {
  return (
      
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route  component={Default} />
      </Switch>

      <Modal/> 

    </>

  );
}

export default App;
