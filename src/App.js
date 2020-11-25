import logo from './logo.svg';
import './App.css';
import React from "react";
import ProfilePhoto from "./profile/ProfilePhoto";   
import FullName from "./profile/FullName"; 
import Adress from "./profile/Adress"; 
    const App = () => {
     return (
       <div className='bg'>
       <FullName/>
         <ProfilePhoto/>
         <Adress/>
       </div>

     );
    };
    export default App;
 
