import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {

    return (
        <div className="">
        <Navbar ></Navbar>
        <Outlet></Outlet>
        </div>
    );
};

export default Home;