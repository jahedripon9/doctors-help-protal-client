import { format } from 'date-fns';
import React from 'react';

const AvailableServices = ({ selectedDate }) => {
    return (
        <section className='mt-16'>
            <p className='text-center text-secondary font-sm text-2xl'>Available Services on <span className='text-3xl font-bold text-red-500'>{format(selectedDate, 'PPPP')}</span></p>
        </section>
    );
};

export default AvailableServices;