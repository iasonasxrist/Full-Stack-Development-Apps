import { createContext, useContext, useEffect } from "react";
import axios from 'axios'

const AppContext = createContext()

const API = 'https://api.pujakaitem.com/api/products'

const AppProvider = ({ children }) => {
    console.log("heyyyyy")

    const getProducts = async (url) => {

        try {
            const res = await axios.get(url);
            const data = await res.data
            console.log("res", data)
        }
        catch (err) {
            throw (err)
        }
    }

    useEffect(() => {
        getProducts(API)
    }, []);

    return (
        <AppContext.Provider value={{ myName: "jason" }}>
            {children}
        </AppContext.Provider>
    )
}

//custom hooks
const useProductContext = () => {
    return useContext(AppContext)
};


export { AppProvider, useProductContext, AppContext };