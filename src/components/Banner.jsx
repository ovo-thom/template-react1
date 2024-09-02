import React from 'react';

const Banner = () => {
    return (
        <div className='h-screen bg-slate-500'>
            <div className="relative w-full h-full flex items-center justify-center">
                <img
                    className='w-full h-full bg-center object-cover absolute top-0 left-0'
                    src="https://cdn.pixabay.com/photo/2018/05/20/02/53/flower-3414880_1280.jpg"
                    alt="Banner"
                />
                <div className="relative z-10 text-center text-white p-4 md:p-8">
                    <h1 className='text-3xl md:text-5xl mb-4'>We Love To Build WordPress</h1>
                    <p className='text-xl md:text-2xl mb-6'>Free Web Template By</p>
                    <button className='border border-teal-400 rounded-full px-8 py-2 bg-teal-400 text-lg md:text-xl hover:bg-transparent duration-300'>
                        Watch Video
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;