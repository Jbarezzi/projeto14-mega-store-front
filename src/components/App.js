import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyle } from '../styles/global';

import Home from './Home/Home';
import SignUpPage from './Sign/SignUpPage';
import SignInPage from './Sign/SignInPage';

export default function App( ) {

  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Home />}/> */}
      <Route path='/' element={<SignInPage />}/>
      <Route path='/sign-up' element={<SignUpPage />}/>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}