import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Social = () => {
    return (
        <div className='flex gap-4'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className='text-teal-400' size={20}/>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className='text-teal-400' size={20}/>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='text-teal-400' size={20}/>
            </a>
            
        </div>
    );
};

export default Social;