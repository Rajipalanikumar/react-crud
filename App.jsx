

import Home from "./comp/Home"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import React from "react";
import Create from "./comp/Create"
import Edit from "./comp/Edit"
function App(){

  return(
    <div>
      <h1>CRUD</h1>
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/create" element={<Create/>}/>
    <Route path="/create" element={<Create/>}/>
    <Route path="/edit" element={<Edit/>}/>
  </Routes>
</Router>

    </div>
   



  );
}
export default App
