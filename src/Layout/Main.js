import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Nevbar from '../Pages/Shared/Nevbar/Nevbar';

const Main = () => {
    return (
        <div>
            <Nevbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;