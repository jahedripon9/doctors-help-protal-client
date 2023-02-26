import React from 'react';
import Appointment_Banner from '../../Appointment_Banner/Appointment_Banner';
import Contact_US from '../../Contact_US/Contact_US';
import Dental_Care from '../../Dental_Care/Dental_Care';
import Services from '../../OUR_SERVICES/Services';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Testimonial from '../../Testimonial/Testimonials';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCards />
            <Services />
            <Dental_Care />
            <Appointment_Banner />
            <Testimonial></Testimonial>
            <Contact_US />
        </div>
    );
};

export default Home;