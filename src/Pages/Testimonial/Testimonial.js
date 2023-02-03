import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import quote from '../../assets/icons/quote.svg'
const Testimonial = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-12 ">
                    <div className='flex flex-row justify-between my-10'>
                        <div>
                            <h1 class="text-1xl font-bold  text-primary mb-5 text-left ">Testimonials</h1>
                            <h1 class="text-4xl font-medium title-font text-gray-900 mb-20 text-left ">What Our Patients Says</h1>
                        </div>
                        <div>
                            <img className='w-40' src={quote} alt="" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-96 w-full mx-auto">
                            <div class="h-full bg-gray-100 p-8 shadow-xl rounded-lg ">
                                <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                                <a class="inline-flex items-center">
                                    <img alt="testimonial" src={people1} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center border-emerald-400 border-2" />
                                        <span class="flex-grow flex flex-col pl-4">
                                            <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
                                            <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                                        </span>
                                </a>
                            </div>
                        </div>
                        <div class="p-4 md:w-96 w-full mx-auto">
                            <div class="h-full bg-gray-100 p-8  shadow-xl rounded-lg">
                                <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                                <a class="inline-flex items-center">
                                    <img alt="testimonial" src={people2} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center border-emerald-400 border-2" />
                                        <span class="flex-grow flex flex-col pl-4">
                                            <span class="title-font font-medium text-gray-900">Alper Kamu</span>
                                            <span class="text-gray-500 text-sm">DESIGNER</span>
                                        </span>
                                </a>
                            </div>
                        </div>
                        <div class="p-4 md:w-96 w-full mx-auto">
                            <div class="h-full bg-gray-100 p-8  shadow-xl rounded-lg">
                                <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                                <a class="inline-flex items-center">
                                    <img alt="testimonial" src={people3} class="w-12 h-12 rounded-full border-emerald-400 border-2 flex-shrink-0 object-cover object-center" />
                                        <span class="flex-grow flex flex-col pl-4">
                                            <span class="title-font font-medium text-gray-900">Alper Kamu</span>
                                            <span class="text-gray-500 text-sm">DESIGNER</span>
                                        </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;