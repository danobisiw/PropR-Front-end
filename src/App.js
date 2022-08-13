import React from "react";
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import {Home} from "./pages/Home.js";
import {Preparation} from "./pages/Preparation.js";
import {Reports} from "./pages/Reports.js";
import {Payments} from "./pages/Payments.js"
import {Aboutus} from "./pages/About_us.js";


function App() {
  return (
 <div>
<Header/>
        <>
       <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Preparation" element={<Preparation/>}/>
          <Route path="/Reports" element={<Reports/>}/>
          <Route path="/Payments" element={<Payments/>}/>
          <Route path="/Aboutus" element={<Aboutus/>}/>
          <Route path="*" element={<h3>Page is not Available</h3>}/>
        </Routes>
       </Router> 
       </> 
 </div>

    
  );
}

export default App;
  