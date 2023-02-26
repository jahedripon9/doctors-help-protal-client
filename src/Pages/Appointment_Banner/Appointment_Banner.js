import React from 'react';
import './Appointment_Banner.css';
import doctor from '../../assets/images/doctor-small.png';
import PrimaryButton from '../../component/PrimaryButton/PrimaryButton';

const Appointment_Banner = () => {
    return (
        <div className='bg bg-slate-800'>
            <section class="text-gray-600 body-font md:my-24">
                <div class="container mx-auto flex px-5   md:flex-row flex-col items-center ">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 -my-32">
                        <img class="object-cover object-center rounded invisible lg:visible" alt="hero" src={doctor} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
                        <p className='text-primary font-bold my-4'>Appointment</p>
                        <h1 class="title-font sm:text-4xl text-3xl font-medium text-white">Make an appointment Today</h1>
                        <p class="mb-8 leading-relaxed text-white my-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Appointment_Banner;