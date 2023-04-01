import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios'
import {productReducer} from "../reducer/productReducer";

const AppContext = createContext()

const API = 'https://api.pujakaitem.com/api/products';

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })

        try {
            const res = await axios.get(url);
            const products = await res.data
            console.log("res", products)
            dispatch({ type: "SET_API_DATA", payload: products })
        }
        catch (err) {
            dispatch({ type: "API_ERROR" })
        }
    }

    const getSingleProduct = async (url) => {
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        }
        catch (err) {
            dispatch({ type: "API_ERROR" })
            console.error("Failed to fetch product")
        }
    }


    useEffect(() => {
        getProducts(API)
    }, []);

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </AppContext.Provider>
    );
};

//custom hooks
const useProductContext = () => {
    return useContext(AppContext);
};


export { AppProvider, AppContext, useProductContext };