import React from 'react'
import FormatPrice from '../helper/formatPrice'
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cartContext';

const CartItem = ({ id, name, image, color, price, amount }) => {

    const { removeItem, setDecrease, setIncrease } = useCartContext();

    return (
        <div className='cart_heading grid grid-five-column'>
            <div className='cart-image--name'>
                <div>
                    <figure >
                        <img src={image} alt={id} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                    <div className="color-div">
                        <p>color: </p>
                        <div className='color-style' style={{ backgroundColor: color }}>
                        </div>
                    </div>
                </div>

            </div>
            <div className='cart-hide'>
                <p>
                    {""}
                    <FormatPrice price={price} /> {''}
                </p>
            </div>
            <div className='cart-hide'>
                <CartAmountToggle
                    amount={amount}
                    setIncrement={()=>setIncrease(id)}
                    setDecrement={()=>setDecrease(id)}
                />
            </div>
            <div className='cart-hide'>
                <p><FormatPrice price={price * amount} />
                </p>
            </div>
            <div className='cart-hide'>

                <FaTrash className='remove_icon' onClick={() => { removeItem(id) }} />
            </div>

        </div>
    )
}

export default CartItem;