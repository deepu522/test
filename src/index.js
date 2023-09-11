import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './Components/Navigation';
import Welcome from './Components/Welcome';
import Classroom from './Components/Classroom';
import Garage from './Components/Garage';
import Book from './Components/Books';
import Booklist from './Components/Booklist';
import Styling from './Components/Styling';
import Reducer from './Components/Reducer';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import Axios from './Components/Axios';
import PostalPincode from './Components/PostalPincode'
import WeatherApi from './Components/WeatherApi';
import Phonenumber from './Components/Phonenumber';
import Pagination from './Components/Pagination';
import question from './assets/question.svg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    {/* <Axios/>  */}
    <Navigation/>
  </BrowserRouter>
{/* <Axios/> */}
{/* <PostalPincode/> */}
{/* <Pagination/> */}
<Phonenumber/>
  {/* <Navigation/>
  <br/>
  <Welcome/> */}
    {/* <Reducer/> */} 
    {/* <Styling></Styling> */}
    {/* <Garage/> */}
    {/* <Booklist/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
