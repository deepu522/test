import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Error from './Components/Error'
import { NavLink } from 'react-router-dom';
import Navigation from './Components/Navigation'
import Phonenumber from './Components/Phonenumber'
// import Axios from './Components/Axios'
// import axios from 'axios'

const App = () => {
  return (   
   <>
  <div>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/about" element={<About></About>}/>
      <Route path="/contact" element={<Contact></Contact>}/>
      <Route path="*" element={<Error/>}/>
      {/* <Route path="/axios" element={<Axios/>}/> */}

    </Routes>
  </div>
  <div className='space-x-4'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
   </>
  )
}

export default App
