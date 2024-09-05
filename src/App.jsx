import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Styledpage = styled.div`
    box-sizing: border-box;
    margin: 0%;
    max-width: 100%;
    height: auto;
`;

const App = () => {

  const [showlogin, setshowlogin] = useState(false);
  const [showregister, setshowregister] = useState(false);

  return (
    <>
      <Styledpage>
        <Navbar />
        <Routes>
          <Route path='/' element={<><Navbar setshowlogin={setshowlogin} /><Home /><Footer /></>} />
          <Route path='/Home' element={<><Navbar setshowlogin={setshowlogin} /><Home /><Footer /></>} />
          <Route path='/Login' element={(showlogin ? <Login setshowlogin={setshowlogin} setshowregister={setshowregister} /> : <></>)} />
          <Route path='/Register' element={showregister ? <Register setshowregister={setshowregister} setshowlogin={setshowlogin} /> : <></>} />
          <Route path='/shop' element={<><Navbar setshowlogin={setshowlogin} /><Shop /><Footer /></>} />
          <Route path='/ProductDetail' element={<><Navbar setshowlogin={setshowlogin} /><ProductDetail /><Footer /></>} />
        </Routes>
      </Styledpage>
    </>
  )
}

export default App;