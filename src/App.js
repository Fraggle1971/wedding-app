import React from 'react';
import {Home, Location, Navbar, Photo_Upload, Registry, Wishes} from './components';
import {Header, Footer} from './containers';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Footer />
    </div>
  )
}

export default App
