import React, { useState } from 'react'
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import CartAmountToggle from './CartAmountToggle';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cartContext'

const AddToCart = ({ product }) => {

    const {addToCart}  = useCartContext();

    const { id, colors, stock } = product;
    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setDecrement = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)

    }
    const setIncrement = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock)
    }

    return (
        <Wrapper>
            <div className='colors'>
                <p>Colors:
                    {colors.map((cur, index) => {
                        return (
                            <button
                                key={index}
                                style={{ backgroundColor: cur }}
                                className={color === cur ? "btnStyle active" : "btnStyle"}
                                onClick={() => setColor(cur)}
                            >
                                {color === cur ? <FaCheck className='checkStyle' /> : null}

                            </button>
                        );
                    })
                    }
                </p>
            </div>
            <CartAmountToggle
                amount={amount}
                setIncrement={setIncrement}
                setDecrement={setDecrement}
            />
            <NavLink
                to='/cart'
                onClick={() => { addToCart(id, color, amount, product) }}
            >
                <Button className='btn'>Add To Cart</Button>
            </NavLink>

        </Wrapper >
    )
}

const Wrapper = styled.section`

    .colors p {
        display: flex;
        justify-content: flex-start;
        align-items: center;

    }

    .btnStyle {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: #000;
        margin-left: 1rem;
        border: none;
        outline: none;
        opacity: 0.5;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }
    }

    .active {
        opacity: 1;
    }

    .checkStyle {
        font-size: 1rem;
        color: #fff;
        align-items: center;

    }
    .amount-toggle{
        margin-top: 3rem; 
        margin-bottom: 1rem; 
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 1.4rem; 

        button {
            border: none;
            background-color: #fff;
            cursor: pointer;
        }
    
        .amount-style {
            font-size: 2.4rem;
            color: ${({ theme }) => theme.colors.btn};
        }
    }
`;
export default AddToCart
