import React from 'react';
import treatment from '../../assets/images/treatment.png';

const Dental_Care = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-16 py-12 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-96 md:w-1/6 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src={treatment}/>
                </div>
                <div class="lg:flex-grow md:w-2/3 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">Exceptional Dental Care, on Your Terms</h1>
                    <p class="mb-8 leading-relaxed">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                     <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default Dental_Care;