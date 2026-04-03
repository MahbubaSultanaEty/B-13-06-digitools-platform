import React from 'react';
import bannerImage from "../assets/banner.png";
import badgeIcon from "../assets/group-5.png";
import play from "../assets/play.png"

const Banner = () => {
    return (
        <div className=''> 
            <div className="hero bg-base-200 min-h-screen pt-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImage}
    />
                    <div>
                        <div className='flex items-center gap-2 badge bg-gray-200 p-4 rounded-2xl text-purple-600 font-semibold'><img src={badgeIcon} alt="" />New: AI-Powered Tools Available</div>
      <h1 className="text-5xl font-bold">Supercharge Your <span className='text-purple-700'>
Digital Workflow</span></h1>
      <p className="py-6">
        Access premium AI tools, design assets, templates, and productivity

software—all in one place. Start creating faster today.


Explore Products

                        </p>
             <div className='flex gap-4'>
                            <button className="btn bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] rounded-full text-white">Explore Products</button>
                            <button className='btn btn-outline border-purple-800 rounded-full text-purple-800 '> <img src={play} alt="" />Watch Demo</button>
                        </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;