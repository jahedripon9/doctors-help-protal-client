import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableService from './AvailableService';

const AvailableServices = ({ selectedDate }) => {
    const [availableServices, setAvailableServices] = useState([])

    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setAvailableServices(data))
    }, [])
    return (
        <section className='mt-16'>
            <p className='text-center text-secondary font-sm text-2xl'>Available Services on <span className='text-3xl font-bold text-red-500'>{format(selectedDate, 'PPPP')}</span></p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    availableServices.map(service => <AvailableService
                        key={service._id}
                        availableServices={service}
                    ></AvailableService>)
}
            </div>
        </section>
    );
};

export default AvailableServices;