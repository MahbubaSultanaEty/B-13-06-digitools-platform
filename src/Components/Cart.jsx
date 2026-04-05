import { Icon } from '@iconify/react';
import React from 'react';

const Cart = ({cart}) => {
    return (
        <div className='grid p-4 gap-3 border border-gray-200 my-2'>
            <h2 className='text-2xl font-semibold
            '>Your Cart </h2>

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
            <div className='flex justify-between font-bold'>
                <h6>Total</h6>
                <h6>$ 90 </h6>
            </div>
            <button className="btn bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] rounded-full text-white btn-block">Proceed To Checkout</button>
        </div>
    );
};

export default Cart;