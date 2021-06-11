import React from 'react';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Iphone from '../Iphone/Iphone';
import MainHeader from '../MainHeader/MainHeader';
import TopNavbar from '../TopNavbar/TopNavbar';
import Xiaomi from '../Xiaomi/Xiaomi';

const Home = () => {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <MainHeader></MainHeader>
            <Iphone></Iphone>
            <Xiaomi></Xiaomi>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;