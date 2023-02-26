import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const ourService = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride treatment is a dental procedure that involves applying a concentrated form of fluoride to the teeth to strengthen the enamel and prevent cavities and tooth decay. It can be applied in various forms, including gels, foams, varnishes, and mouth rinses.',
            image: fluoride,

        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'A cavity filling is a dental procedure in which a dentist removes decayed tooth material and fills the resulting cavity with a dental material, such as amalgam, composite, or glass ionomer, to restore the tooths function and shape.',
            image: cavity,

        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Teeth whitening is a cosmetic dental procedure that uses bleaching agents to lighten the color of teeth and remove stains and discoloration. It can be done at a dentists office or at home using over- the - counter products.',
            image: whitening,

        }
    ]

    return (
        <div className='my-10'>
            <div className='text-center my-5'>
                <p className='text-teal-400 text-2xl font-bold'>Our Services</p>
                <h1 className='text-5xl'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5'>

                {
                    ourService.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;