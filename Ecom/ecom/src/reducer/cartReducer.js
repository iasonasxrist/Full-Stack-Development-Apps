
export const cartReducer = (state, action) => {


    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload;

        let existingProduct = state.cartItems.find((curItem) => curItem.id === id + color)

        if (existingProduct) {
            let updatedProduct = state.cartItems.map((curItem) => {
                if (curItem.id === id + color) {
                    let newAmount = curItem.amount + amount;

                    if (newAmount >= curItem.max) {
                        newAmount = curItem.max;
                    }
                    return {
                        ...curItem,
                        amount: newAmount,
                    }
                } else {
                    return curItem;
                }
            });
            return {
                ...state,
                cartItems: updatedProduct,
            };
        } else {

            let cartProduct = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
            };
            return {
                ...state,
                cartItems: [...state.cartItems, cartProduct],
            };
        }
    }
    if (action.type === "SET_INCREASE") {
        let updatedProduct = state.cartItems.map((curElem) => {
            if (curElem.id === action.payload) {
                let incAmount = curElem.amount + 1;

                if (incAmount >= curElem.max) {
                    incAmount = curElem.max;
                }
                return {
                    ...curElem,
                    amount: incAmount,
                }
            } else {
                return curElem;
            }
        })
        return {
            ...state,
            cartItems: updatedProduct
        }
    }

    if (action.type === "SET_DECREASE") {

        let updatedProduct = state.cartItems.map((curElem) => {
            if (curElem.id === action.payload) {
                let decAmount = curElem.amount - 1;
                if (decAmount <= 1) {
                    decAmount = 1;
                }

                return {
                    ...curElem,
                    amount: decAmount
                }
            } else {
                return curElem;
            }
        })
        return { ...state, cartItems: updatedProduct }
    }


    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cartItems.filter((item) => {
            return item.id !== action.payload
        })
        return {
            ...state,
            cartItems: updatedCart,

        }

    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cartItems: []
        }
    }

    // We provide two ways to manage the cart items props
    //1st for separate calculations

    // if (action.type === "CART_TOTAL_ITEM") {

    //     let updatedTotalVal = state.cartItems.reduce((acc, curElem) => {
    //         let { amount } = curElem;

    //         acc = acc + amount;
    //         return acc;

    //     }, 0);

    //     return {
    //         ...state,
    //         total_items: updatedTotalVal,
    //     };
    // }

    // if (action.type === "CART_TOTAL_PRICE") {
    //     let totalPrice = state.cartItems.reduce((acc, curElem) => {
    //         let { price, amount } = curElem

    //         acc = acc + (amount * price);
    //         return acc
    //     }, 0)
    //     return {
    //         ...state,
    //         total_price: totalPrice,
    //     }
    // }

    //2st for simplified version
    if (action.type === "CART_GLOBAL_STATE") {
        let { total_price, total_item } = state.cartItems.reduce((accum, curElem) => {
            let { price, amount } = curElem;

            accum.total_price += amount * price;
            accum.total_item += amount;


            return accum;
        },
            {
                total_price: 0,
                total_item: 0,
            }
        );
        return {
            ...state,
            total_price,
            total_items: total_item,
        }
    }
    return state;
}
