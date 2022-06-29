import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HomeContent from './HomeContent';
import GoTop from './GoTop';
import {Routes,Route} from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <GoTop/>
            <Header/>
            <HomeContent/>
            <Footer/>
        </div>
    );
};

export default Home;