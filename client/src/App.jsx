import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import  HomePage  from "./components/HomePage.jsx";
import  LandingPage  from "./components/LandingPage.jsx";
import  CardDetail  from "./components/CardDetail.jsx";
import  CreateActivity  from "./components/CreateActivity.jsx";
import  NotFound  from "./components/NotFound.jsx"
import  AboutMe  from "./components/AboutMe.jsx"

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ < LandingPage /> }/>
      <Route path='/home' element={ < HomePage /> }/>
      <Route path='/home/:id' element={ < CardDetail /> } />
      <Route path='/create' element={ < CreateActivity /> } />
      <Route path='*' element={ < NotFound /> } />
      <Route path='/AboutMe' element={ < AboutMe /> } />

    </Routes>
    
    </BrowserRouter>
    
  )
}

export default App
