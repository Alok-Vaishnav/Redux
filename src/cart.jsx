// src/cart.js
import React from 'react';
import { useSelector } from 'react-redux';

export default function Cart() {
    const items = useSelector((state) => state.cart.items);

    const totalItems = items.length;
    const totalPrice = items.reduce((total, item) => total + item.price, 0);

    return (
        <div className="flex justify-center ">
            <div className="h-fit">
                <h2>Shopping Cart</h2>
                <p>Total Items: {totalItems}</p>
                <p>Total Price: ${totalPrice.toFixed(2)}</p>
            </div>
        </div>
    );
}



