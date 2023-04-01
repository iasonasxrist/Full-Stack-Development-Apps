import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';

 const CartAmountToggle = ({ amount, setDecrement, setIncrement }) => {
    return (
        <div className='cart-button'>
            <div className='amount-toggle'>
                <button
                    onClick={() => setDecrement()}>
                    <FaMinus />
                </button>
                <div className='amount-style'>
                    {amount}
                </div>
                <button
                    onClick={() => setIncrement()}>
                    <FaPlus />
                </button>
            </div>


        </div>
    )
}


export default CartAmountToggle
