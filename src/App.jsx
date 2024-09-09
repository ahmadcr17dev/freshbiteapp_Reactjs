import React from 'react';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import About from './components/About';
import { Toaster } from 'react-hot-toast';
import MyState from './context/MyState';

const Styledpage = styled.div`
    box-sizing: border-box;
    margin: 0%;
    max-width: 100%;
    height: auto;
`;

const App = () => {

  return (
    <>
      <MyState>
        <Styledpage>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/ProductDetail' element={<><Navbar /><ProductDetail /><Footer /></>} />
            <Route path='/checkout' element={<><Navbar /><Checkout /><Footer /></>} />
            <Route path='/Cart' element={<><Navbar /><Cart /><Footer /></>} />
            <Route path='/About' element={<><Navbar /><About /><Footer /></>} />
          </Routes>
          <Toaster />
        </Styledpage>
      </MyState>
    </>
  )
}

export default App;