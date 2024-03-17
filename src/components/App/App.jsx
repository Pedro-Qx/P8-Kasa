import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FetchRentals from '../../utils/context/FetchRentals';
import Home from '../../pages/Home';
import Apropos from '../../pages/Apropos';
import Logement from '../../pages/Logements';
import "../../utils/style/Main.scss";
import { useEffect, useState } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import ErrorPage from '../ErrorPage';

const App = () => {

    const [rentals, setrentals] = useState([]);

    useEffect(() => {
        FetchRentals()
            .then((resp) => {
                setrentals(resp)
            })
    }, [])

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home rentals={rentals} />} />
                <Route path='/apropos' element={<Apropos />} />
                <Route path='/logements/:id' element={<Logement rentals={rentals} />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App;