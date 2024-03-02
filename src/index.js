import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Apropos from './pages/Apropos';
import Logement from './pages/Logements';
import Error from './components/Error';
import "../src/utils/style/Main.scss";
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/apropos' element={<Apropos />} />
          <Route path='/logements/:id' element={<Logement  />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );