import React from 'react';
import Fluoride  from '../../assets/images/fluoride.png';
import Cavity from '../../assets/images/cavity.png';
import Teeth from '../../assets/images/whitening.png';


const OUR_SERVICES = () => {
    return (
        <div>
            <div className='text-primary font-bold text-center'>
                <h5 className='center'>OUR SERVICES</h5>
                <h2 className='text-black text-3xl'>Services We Provide</h2>
            </div>
            <div className='flex gap-2 flex-col lg:flex-row my-14'>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure className="px-10 pt-10">
                        <img src={Fluoride} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fluoride Treatment!</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure className="px-10 pt-10">
                        <img src={Cavity} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cavity Filling</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure className="px-10 pt-10">
                        <img src={Teeth} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Teeth Whitening</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OUR_SERVICES;