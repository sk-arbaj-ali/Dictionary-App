import React from 'react';
import Navbar from './components/Navbar';
import MainWindow from './components/MainWindow';
import {BrowserRouter} from 'react-router-dom';

function App(){
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <MainWindow />
      </div>
    </BrowserRouter>
  );
}

export default App;