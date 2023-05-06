import React from 'react';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className="my-8 md:my-32 ml-5 md:ml-32 mr-5">
            <div data-aos="fade-up"                 data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
                <h4 className='text-xl text-cyan-600'>Hi! I am</h4>
                <h1 className="text-6xl font-bold text-violet-500">Samaul Haque</h1>
                <h3 className='text-2xl font-bold text-cyan-600 mt-4 mb-8'>
                <Typewriter
                    options={{
                        strings: ['Front End Developer'],
                        autoStart: true,
                        loop: true
                    }}
                />
                </h3>
               
                
               <div
                data-aos="zoom-in-down" 
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
               >
               <button 
                className="btn btn-accent font-bold"><a 
                href="https://drive.google.com/file/d/1yuBndVxpZs39JxkaT1KZYHJlyBsArHYJ/view?usp=sharing" target='_blank'>Get Resume</a></button>
               </div>
            </div>
        </div>
    );
};

export default Banner;