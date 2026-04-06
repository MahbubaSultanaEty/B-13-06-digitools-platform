import React from 'react';

const Testimonial = () => {
    return (
        <div>
           <div className="hero bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white min-h-[70vh]">
  <div className="hero-content text-center">
    <div className="max-w-2xl">
      
      <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
        Supercharge Your Workflow with AI Tools 🚀
      </h1>

      <p className="py-6 text-sm md:text-base text-white/90">
        Discover powerful digital tools to create, automate, and scale your ideas. 
        From design to analytics — everything you need in one place.
      </p>

      <div className="flex justify-center gap-4 flex-wrap mb-4">
        <button className="btn bg-white text-purple-700 font-semibold hover:bg-gray-100 border-none rounded-full">
          Explore Products
        </button>
        <button className="btn btn-outline  text-white hover:bg-white hover:text-purple-700 border border-white rounded-full">
          View Pricing
        </button>
      </div>

                        <p className='text-xs text-white/80'>14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Testimonial;