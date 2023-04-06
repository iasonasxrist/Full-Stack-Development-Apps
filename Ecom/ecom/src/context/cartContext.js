import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { cartReducer } from '../reducer/cartReducer';

const getLocalData = () => {
    var localData = localStorage.getItem('cartItems')
    if (localData === []) {
        return [];

    } else {
        return JSON.parse(localData);
    }
};

const initialState = {
    cartItems: getLocalData(),
    total_items: "",
    total_price: "",
    shipping_fee: 50000,
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    };
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }

    const setIncrease = (id) => {
        dispatch({ type: "SET_INCREASE", payload: id })
    }
    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREASE", payload: id })
    }
    useEffect(() => {
        // dispatch({ type: "CART_TOTAL_ITEM" });
        // dispatch({type: "CART_TOTAL_PRICE"});
        dispatch({ type: "CART_GLOBAL_STATE" });

        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    }, [state.cartItems])

    return (
        <CartContext.Provider value={{
            ...state,
            addToCart,
            removeItem,
            clearCart,
            setDecrease,
            setIncrease,

        }}>
            {children}
        </CartContext.Provider>
    )
};

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };