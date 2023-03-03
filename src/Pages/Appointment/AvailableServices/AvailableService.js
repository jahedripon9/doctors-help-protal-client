import React from 'react';

const AvailableService = ({ availableServices }) => {
    const { name, slots } = availableServices;
    return (
        <div className="card  shadow-xl text-primary-content my-10">
            <div className="card-body text-center ">
                <h2 className="text-3xl font-bold text-center text-primary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} { slots.length >1? 'spaces' : 'space' } available</p>
                <div className="card-actions justify-center">
                    <button className="btn border-0  bg-primary text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AvailableService;