import React from "react";
import DOP from "../assets/DOP.png";
import {Route,Routes} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";


export default function Navigation() {
  const fname = "Veeramalli";
  const lname = "Sandeep";

  const dept = "IndiaPost";
  const country = "India";
  const  main= {
    color: "green",
    fontFamily: "serif",
    fontWeight: "bold", 
    fontsize: "16px",
    color: "blue"
   
    
  };

  return (
    <>
      <div  className="flex space-x-3 bg-red-600 p-3 rounded-md text-amber-400 font-bold text-xl  ">
        <img src={DOP} alt="" className="h6 rounded-full justify-center"></img>
        <NavLink to="/" >
        Home</NavLink>
        <NavLink to="/about">

        About</NavLink>
        <NavLink to="/contact">
        Contact
        </NavLink>      
        </div>
      
      <div>
      
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Error/>}/>
      {/* <Route path="/axios" element={<Axios/>}/> */}

    </Routes>
      </div>
      <div
        style={{
          color: "blue",
          fontFamily: "serif",
          fontWeight: "bold",
          background: "amazon",
        }}
      >
       
      </div>
     
      
</>    
  );
}
