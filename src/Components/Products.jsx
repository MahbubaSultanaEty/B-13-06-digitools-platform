import React, { use, } from 'react';
import SingleProduct from './SingleProduct';

const Products = ({ productPromise, cart, setCart }) => {

    // console.log(productPromise);
    const products = use(productPromise);

    

    console.log(products, );
    return (         
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-3'>

                {
                    products.map(product => {
                        return <SingleProduct  key={product.id} product={product} cart={cart} setCart={setCart}
                        ></SingleProduct> 
                    })
                }
            </div>  
        
    );
};

export default Products;