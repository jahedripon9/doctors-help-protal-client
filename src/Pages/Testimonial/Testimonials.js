import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import quote from '../../assets/icons/quote.svg'

import Testimonial from './Testimonial';

const Testimonials = () => {
    const patientsSays = [
        {
            id: 1,
            name: 'Holden Caulfield',
            say: 'Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90s microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.',
            designation: 'UI DEVELOPER',
            img: people1,
        },
        {
            id: 2,
            name: 'Alper Kamu',
            say: 'Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90s microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.',
            designation: 'DESIGNER',
            img: people2,
        },
        {
            id: 3,
            name: 'Alper Kamu',
            say: 'Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90s microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.',
            designation: 'DESIGNER',
            img: people3,
        }
    ]
    return (
        <div >
            <div className='flex flex-row justify-between my-5'>
                <div>
                    <h1 class="text-1xl font-bold  text-primary mb-5 text-left ">Testimonials</h1>
                    <h1 class="text-4xl font-medium title-font text-gray-900 mb-5 text-left ">What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-40' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5'>
                {
                    patientsSays.map(testimonial => <Testimonial
                        key={testimonial.id}
                        testimonial={testimonial}
                    ></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;
