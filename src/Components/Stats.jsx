import React from 'react';

const Stats = () => {
    return (
        <div className='bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white py-8 px-12 '>
            <div className='max-w-7xl mx-auto  flex flex-wrap gap-12 items-center text-center md:grid md:grid-cols-5'>
                <div  className='flex'>
                    <div>
                <h2 className='text-4xl font-bold'>50K+</h2>
                        <p className='font-semibold '>Active Users</p></div>
                    <div className='bg-zinc-500 h-12 w-1 text-center'></div>
                </div>
                
                <div>
                <h2 className='text-4xl font-bold'>200+</h2>
                <p className='font-semibold '>Premium Tools</p>
                </div>
                <div className='bg-zinc-500 h-12 w-1'></div>
                <div className=''>
                <h2 className='text-4xl font-bold'>4.9</h2>
                <p className='font-semibold '>Rating</p>
                </div>
                </div>
        </div>
    );
};

export default Stats;