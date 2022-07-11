import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyle } from '../styles/global';

import Home from './Home/Home';
import SignUpPage from './Sign/SignUpPage';
import SignInPage from './Sign/SignInPage';
import CheckoutPage from './Checkout/CheckoutPage';

import UserContext from "./../contexts/UserContext"

export default function App( ) {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<SignInPage />}/>
          <Route path='/sign-up' element={<SignUpPage />}/>
          <Route path='/checkout' element={<CheckoutPage />}/>
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </UserContext.Provider>
  )
}