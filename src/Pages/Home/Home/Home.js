import React from 'react';
import Appointment_Banner from '../../Appointment_Banner/Appointment_Banner';
import Contact_US from '../../Contact_US/Contact_US';
import Dental_Care from '../../Dental_Care/Dental_Care';
import OUR_SERVICES from '../../OUR_SERVICES/OUR_SERVICES';
import Testimonial from '../../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <Info />
            <OUR_SERVICES />
            <Dental_Care />
            <Appointment_Banner />
            <Testimonial />
            <Contact_US />
        </div>
    );
};

export default Home;