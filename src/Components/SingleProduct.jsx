import React from 'react';
import { Icon } from "@iconify/react";
import { useState } from 'react';

const SingleProduct = ({ product }) => {
    
    // console.log(product.name);
    let bgColor;
    if (product.tagType === "new") {
        bgColor = "bg-green-500"
    } else if (product.tagType === "popular") {
        bgColor = "bg-blue-500";
    } else {
        bgColor = "bg-gold-500";
    }


    const [isAddedToCart, setIsAddedToCart] = useState(false); 
    return (
        
        <div className="card w-96 bg-base-100 shadow-sm mx-auto">                  
        
            <div className="card-body">
                <div className=' text-right'>
                    <span className={`badge ${bgColor} badge-xs badge-warning text-right p-2`} >{product.tagType} </span>
                </div>
                <Icon icon={product.icon} width="60px"></Icon>
                <div className=" space-y-2 h-28">                   
                    <h2 className="text-3xl font-bold">{product.name}</h2>
                    
                    <p className='text-zinc-600'>{product.description}</p>
                    <h4 className="text-xl font-semibold">{product.price}/{ product.period}</h4>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {
                        product.features.map((feature, index) => {
                            return <li key={index} className='flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 p-3 rounded-xl shadow-md'>
       <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 40 40"><g fill="none" strokeMiterlimit="10"><path fill="#48eeff" stroke="#231f20" d="M37 4.24c-1.89-1.44-4.45-2.38-7 0c-1.52 1-5.67 5-10.22 11c-1.19 1.58-2.32 3.08-3.35 4.49c-3.74-2.84-6.69-4.85-7.91-5c-2.07-.8-4.31 1.45-5.75 3.34S-.32 22.63 1 24.4c.47 1.14 3.13 3.53 6.87 6.38c4.49 3.41 7.73 6 9.63 6.24c2.91 1.13 5-2.31 13.37-13.36c4.55-6 7.45-11 8-12.69c1.56-3.08-.03-5.29-1.87-6.73Z" strokeWidth="1"/><path stroke="#fff" strokeLinecap="round" d="M28.56 8.89c1.64-1.84 3.16-3.58 4.55-3.73" strokeWidth="1"/></g></svg>
                                <span>{ feature}</span>
      </li>
                        })
      }
    </ul>
    <div className="mt-6">
                    <button
                        onClick={() => setIsAddedToCart(true)}
                        className="btn bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] rounded-full text-white btn-block">{isAddedToCart ? "Added to Cart" : "Buy Now"}</button>
    </div>
  </div>
</div>
        
    );
};

export default SingleProduct;