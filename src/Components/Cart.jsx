import { Icon } from '@iconify/react';
import React from 'react';

const Cart = ({ cart, setCart }) => {

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    console.log(totalPrice);
    
    return (
        <div className='grid p-4 gap-3 border border-gray-200 my-2 rounded'>
            <h2 className='text-2xl font-semibold
            '>Your Cart </h2>

            {
                cart.length == 0 ?  <div className='h-60 bg-indigo-100 rounded-lg flex flex-col justify-center items-center '>
                <h4 className='text-2xl font-bold'>Your Cart Is Empty</h4>
                <p className='text-xs font-bold text-indigo-300 '>Go to products section to buy products</p>
                </div> : <>
                    {cart.map(cartproduct => {
                return <div key={cartproduct.id} className='p-4 bg-indigo-100 rounded-lg flex justify-between'>
                    <div className='flex  items-center gap-3'>
                        <Icon icon={cartproduct.icon} width="40px"></Icon>
                        <div className='font-semibold'>
                            <h4>{cartproduct.name}</h4>
                            <p>$ { cartproduct.price}</p>
                        </div>
                    </div>
                    <button className='btn btn-ghost text-red-600'>Remove</button>
                </div>
            })}
                        </>
            }

           
            
            <div className='flex justify-between font-bold'>
                <h6>Total</h6>
                <h6>$ {totalPrice} </h6>
            </div>
            <button
                onClick={() => setCart([])} 
                className="btn bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] rounded-full text-white btn-block">Proceed To Checkout</button>
        </div>
    );
};

export default Cart;