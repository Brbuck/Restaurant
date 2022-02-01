import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Routes from './routes'

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer/>
    </Router>
  );
}

export default App;
