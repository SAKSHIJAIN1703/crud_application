import React from 'react';
import Create from './Create';
import Edit from './Edit';
import Read from './Read';
import {Routes,Route} from 'react-router-dom'

import './App.css';



function App() {

  return (
  <Routes>
    <Route path="/" element={<Read/>}></Route>
    <Route path="/Create" element={<Create/>}></Route>
    <Route path="/Edit" element={<Edit/>}></Route>
  </Routes>
  );
}

export default App;
