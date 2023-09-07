import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Dashboard from './components/Dashboard'
import Devotees from './components/Devotees'
import HinduCalendar from './components/HinduCalendar'
import Priests from './components/Priests'
import Header from './Header';
import Sidebar from './Sidebar';
import { Route, Routes } from 'react-router-dom'
import './style.css'
function App() {
  const [toggle,setToggle]=useState(false) 
  function Toggle(){
    setToggle(!toggle);
  }

  return (
  
    <div>
    <div className="d-flex">
     <div className={toggle ? "d-none":"w-auto "}>
     <Sidebar/>
      </div>
      <div className="col over-flow auto">
              <Header Toggle={Toggle}/>
              <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/devotees' element={<Devotees/>}/>
        <Route path='/hinducalendar' element={<HinduCalendar/>}/>
        <Route path='/priests' element={<Priests/>}/>
      </Routes>

      </div>
    </div>
   </div>
  );
}

export default App;
