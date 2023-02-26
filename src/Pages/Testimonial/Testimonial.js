import React from 'react';
import { Link } from 'react-router-dom';

const Testimonial = ({ testimonial }) => {
    const { img, say, name, designation } = testimonial;
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-12 ">
                    
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-96 w-full mx-auto">
                            <div class="h-full bg-gray-100 p-8 shadow-xl rounded-lg ">
                                <p class="leading-relaxed mb-6">{say}</p>
                                <Link to='/' class="inline-flex items-center">
                                    <img alt="testimonial" src={img} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center border-emerald-400 border-2" />
                                        <span class="flex-grow flex flex-col pl-4">
                                        <span class="title-font font-medium text-gray-900">{name}</span>
                                        <span class="text-gray-500 text-sm">{designation}</span>
                                        </span>
                                </Link>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;