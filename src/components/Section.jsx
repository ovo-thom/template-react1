import React from 'react';
import { FaCheck } from "react-icons/fa";

const Section = () => {
    return (
        <div className='py-8'>
            <div className="w-11/12 md:w-9/12 mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
                
                <div className='md:w-3/12 w-full'>
                    <h3 className='text-teal-400 text-2xl font-semibold'>Innovate</h3>
                    <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quo minima facilis? Deserunt nesciunt similique ad. Praesentium ipsum itaque, repellendus similique doloribus explicabo beatae aperiam sint non modi velit debitis.</p>
                    <div className="flex items-center">
                        <FaCheck className='text-teal-400 mr-2'/>
                        <p>Web design</p>
                    </div>
                </div>

                <div className='md:w-3/12 w-full'>
                    <h3 className='text-teal-400 text-2xl font-semibold'>Create</h3>
                    <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quo minima facilis? Deserunt nesciunt similique ad. Praesentium ipsum itaque, repellendus similique doloribus explicabo beatae aperiam sint non modi velit debitis.</p>
                    <div className="flex items-center">
                        <FaCheck className='text-teal-400 mr-2'/>
                        <p>Web design</p>
                    </div>
                </div>

                <div className='md:w-3/12 w-full'>
                    <h3 className='text-teal-400 text-2xl font-semibold'>Scale</h3>
                    <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quo minima facilis? Deserunt nesciunt similique ad. Praesentium ipsum itaque, repellendus similique doloribus explicabo beatae aperiam sint non modi velit debitis.</p>
                    <div className="flex items-center">
                        <FaCheck className='text-teal-400 mr-2'/>
                        <p>Web design</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Section;