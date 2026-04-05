import React, { useState } from 'react';
import Products from './Products';
import Cart from './Cart';


const Main = ({ productPromise, setIsActiveTab, isActiveTab }) => {
    

    const [cart, setCart] = useState([]);
    console.log(isActiveTab);
    
    return (
        <div>
            <div className='max-w-7xl mx-auto my-10'>
            <div className='w-[90%] text-center mx-auto space-y-2 mb-4'>
                <h2 className='text-4xl md:text-5xl font-bold'>Premium Digital Tools</h2>
                <p className='text-sm font-semibold text-purple-400'>Choose from our curated collection of premium digital products designed
                        to boost your productivity and creativity.</p>
                </div>
                
                {/* tabs */}
                
    {/* name of each tab group should be unique */}
<div className="tabs tabs-box bg-transparent justify-center pt-4">
                    <input type="radio"
                        name="my_tabs_1" className={`font-semibold tab rounded-full w-40 ${isActiveTab === "products" && "bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white" }`} aria-label="Products"
                    onClick={() =>setIsActiveTab("products")} defaultChecked/>
                    <input type="radio"
                        name="my_tabs_1" className={`font-semibold tab rounded-full w-40 ${isActiveTab === "cart" && "bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white"}` }aria-label="Cart" 
                    onClick={()=> setIsActiveTab("cart")}/>
</div>
                {/* products & Cart*/}
                
                {/* {isActiveTab === "products" ? <Products productPromise={productPromise} cart={cart} setCart={setCart}  /> : <Cart cart={cart}/>}  */}
                <div className={isActiveTab === "products" ? "block" : "hidden"}>
  <Products productPromise={productPromise} cart={cart} setCart={setCart} />
</div>

<div className={isActiveTab === "cart" ? "block" : "hidden"}>
  <Cart setCart={setCart} cart={cart} />
</div>
           
            
        </div>
           
        </div>
    );
};

export default Main;