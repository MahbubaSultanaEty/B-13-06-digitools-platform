import React from 'react';
import user from "../assets/user.png";
import productPackage from "../assets/package.png"
import rocket from "../assets/rocket.png"

const Steps = () => {
    return (
        <div className='max-w-7xl mx-auto my-12'>
            <div className='w-[90%] text-center mx-auto space-y-2 mb-4'>
                <h2 className='text-4xl md:text-5xl font-bold'>Get Started in 3 Steps</h2>
                <p className='text-sm font-semibold text-purple-900'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-3'>
                <div className='w-96 bg-base-100 shadow-sm shadow-indigo-500 rounded-2xl mx-auto py-10 px-8'>
                    <div className='flex justify-end'>
                     <span className='text-right px-2 py-1 bg-purple-800 text-white rounded-full inline-block'>01</span>
                </div>
               
                <div className='flex justify-center flex-col items-center gap-3'>
                    <div className='h-28 w-28 bg-indigo-200 flex rounded-full place-content-center p-4'>
                        <img src={user} alt="" />
                    </div>
                    
                       
                    <h3 className='font-semibold text-lg'>Create Account</h3>
                    <p className='text-zinc-500 text-sm text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                </div>
                <div className='w-96 bg-base-100 shadow-sm shadow-indigo-500 rounded-2xl mx-auto py-10 px-8'>
                    <div className='flex justify-end'>
                     <span className='text-right px-2 py-1 bg-purple-800 text-white rounded-full inline-block'>02</span>
                </div>
               
                <div className='flex justify-center flex-col items-center gap-3'>
                    <div className='h-28 w-28 bg-indigo-200 flex rounded-full place-content-center p-4'>
                        <img src={productPackage} alt="" />
                    </div>
                    
                       
                    <h3 className='font-semibold text-lg'>Choose Products</h3>
                    <p className='text-zinc-500 text-sm text-center'>Browse our catalog and select the tools
that fit your needs.</p>
                </div>
                </div>
                <div className='w-96 bg-base-100 shadow-sm shadow-indigo-500 rounded-2xl mx-auto py-10 px-8'>
                    <div className='flex justify-end'>
                     <span className='text-right px-2 py-1 bg-purple-800 text-white rounded-full inline-block'>03</span>
                </div>
               
                <div className='flex justify-center flex-col items-center gap-3'>
                    <div className='h-28 w-28 bg-indigo-200 flex rounded-full place-content-center p-4'>
                        <img src={rocket} alt="" />
                    </div>
                    
                       
                    <h3 className='font-semibold text-lg'>Start Creating</h3>
                    <p className='text-zinc-500 text-sm text-center'>Download and start using your premium 
tools immediately.</p>
                </div>
                </div>
                
           </div>
        </div>
    );
};

export default Steps;