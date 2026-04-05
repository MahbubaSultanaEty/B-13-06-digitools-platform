import React, { use, } from 'react';
import SingleProduct from './SingleProduct';

const Products = ({ productPromise }) => {

    // console.log(productPromise);
    const products = use(productPromise);

    

    console.log(products);
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='w-[90%] text-center mx-auto'>
                <h2 className='text-4xl md:text-5xl font-bold'>Premium Digital Tools</h2>
                <p className='text-sm font-semibold text-indigo-950'>Choose from our curated collection of premium digital products designed
                        to boost your productivity and creativity.</p>
            </div>
            {/* products */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-3'>



                {
                    products.map(product => {
                        return <SingleProduct key={product.id} product={product}
                        ></SingleProduct> 
                    })
                }
            </div>
        </div>
    );
};

export default Products;