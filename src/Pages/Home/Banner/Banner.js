import React from 'react';
import './Banner.css'
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../component/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero bg">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={chair} alt='banner' className="lg:w-1/2 w-2/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;