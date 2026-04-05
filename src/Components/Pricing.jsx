import React from 'react';
import { Icon } from '@iconify/react';


const Pricing = () => {
    return (
        <div className='max-w-7xl mx-auto my-12 '>
             <div className='w-[90%] text-center mx-auto space-y-2 mb-4'>
                <h2 className='text-4xl md:text-5xl font-bold'>Pricing Plans</h2>
                <p className='text-sm text-gray-500'> Choose the plan that fits your digital workflow. Get access to AI-powered tools, cloud storage, and premium templates to elevate your projects.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-3 ">

                {/* starter */}
        <div className="card  w-96 mx-auto bg-white shadow-lg rounded-xl border border-gray-200 p-6 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold text-gray-900">Starter</h2>
            <span className="text-lg font-semibold text-gray-700">$9/mo</span>
                    </div>
                    <p className='mb-6 text-gray-700'> perfect for getting started</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <Icon icon="mdi:shield-tick-outline" className="w-5 h-5 text-green-500 mr-2" />
              Basic digital asset creation
            </li>
            <li className="flex items-center">
              <Icon icon="mdi:shield-tick-outline" className="w-5 h-5 text-green-500 mr-2" />
              Access to free templates
            </li>
            <li className="flex items-center">
              <Icon icon="mdi:shield-tick-outline" className="w-5 h-5 text-green-500 mr-2" />
              Limited cloud storage
            </li>
          </ul>
          <button className="mt-6 w-full bg-gray-100  font-semibold py-3 shadow-md hover:bg-gray-200 transition-all bg-gradient-to-r from-indigo-700 to-purple-500 text-white rounded-full">
            Subscribe
          </button>
        </div>

        {/* premium */}
      <div className="card  w-96 bg-white shadow-lg rounded-xl border border-gray-200 relative z-0 mx-auto bg-gradient-to-r from-indigo-700 to-purple-500 text-white">
        {/* Popular badge */}
        <div className="flex justify-center absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 text-xs font-semibold bg-yellow-200 text-yellow-800 rounded-full shadow">
            Most Popular
          </span>
        </div>

        <div className="card-body p-6 text-white">
          <div className="flex justify-between items-center mb-2 text-white">
            <h2 className="text-3xl font-extrabold ">Premium</h2>
                            <span className="text-xl font-semibold ">$29/mo</span>                          
                        </div>
                         <p className='mb-6'>Best For Proffesionals</p>

          <ul className="space-y-3 ">
            <li className="flex items-center">
              <Icon icon="mdi:shield-tick-outline" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <span>High-resolution digital asset creation</span>
            </li>
            <li className="flex items-center">
              <Icon icon="mdi:shield-tick-outline" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <span>Customizable design templates</span>
            </li>
            <li className="flex items-center">
              <Icon icon="mdi:shield-tick-outline" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <span>Cloud storage & sync across devices</span>
            </li>
            <li className="flex items-center">
              <Icon icon="mdi:shield-tick-outline" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <span>AI-powered automation & enhancements</span>
            </li>
            <li className="flex items-center">
              <Icon icon="mdi:shield-tick-outline" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <span>Smart Analitycs</span>
            </li>
            <li className="flex items-center">
              <Icon icon="mdi:shield-tick-outline" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <span>Unlimited Projects </span>
            </li>
          </ul>

          <button className="mt-6 w-full bg-white text-indigo-700 font-semibold py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
            Subscribe
          </button>
        </div>
      </div>
      
                {/* pro */}
                        <div className="w-96 h-full mx-auto bg-white shadow-lg rounded-xl border border-gray-200 p-6 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold text-gray-900">Pro</h2>
            <span className="text-lg font-semibold text-gray-700">$59/mo</span>
                    </div>
                    <p className='mb-6 text-gray-700'>For teams and businesses</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <Icon icon="mdi:shield-tick-outline" className="w-5 h-5 text-green-500 mr-2" />
              All Premium features
            </li>
            <li className="flex items-center">
              <Icon icon="mdi:shield-tick-outline" className="w-5 h-5 text-green-500 mr-2" />
              Team collaboration tools
            </li>
            <li className="flex items-center">
              <Icon icon="mdi:shield-tick-outline" className="w-5 h-5 text-green-500 mr-2" />
              Priority support
            </li>
            <li className="flex items-center">
              <Icon icon="mdi:shield-tick-outline" className="w-5 h-5 text-green-500 mr-2" />
              Advanced analytics
            </li>
          </ul>
          <button className="mt-6 w-full bg-gray-100  font-semibold py-3 rounded-full shadow-md hover:bg-gray-200 transition-all bg-linear-to-r from-indigo-700 to-purple-500 text-white">
            Subscribe
          </button>
        </div>
    </div>
            
        </div>
    );
};

export default Pricing;