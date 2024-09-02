import React from 'react';
import Social from './Social';

const Contact = () => {
    return (
        <div className='py-4 px-6 md:px-10 bg-slate-950 text-white'>
            <div className="container-contact flex justify-around flex-col md:flex-row">
                <div className="infos-contact flex flex-col md:flex-row md:items-center mx-auto">
                    <p className="phone mr-4">Phone :<span className='text-teal-400'>+1 54844589</span></p>
                    <p className="email">Email :<span className='text-teal-400'>info@colorlib.com</span></p>
                </div>
                <div className="mt-4 md:mt-0 mx-auto">
                    <Social />
                </div>
            </div>
        </div>
    );
};

export default Contact;