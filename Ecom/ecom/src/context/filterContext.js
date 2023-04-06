import { createContext, useContext, useReducer, useEffect } from 'react'
import { useProductContext } from "../context/productContext";
import { filterReducer } from '../reducer/filterReducer';

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    }
}

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext()

    const [state, dispatch] = useReducer(filterReducer, initialState)

    //set grid view
    const setGridView = () => {
        return dispatch({ type: "SET_GRIDVIEW" })
    }
    //set list view
    const setListView = () => {
        return dispatch({ type: "SET_LISTVIEW" })
    }
    const sorting = (e) => {
        const value = e.target.value;
        return dispatch({ type: "GET_SORT_VALUE", payload: value })

    }
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        console.log("🚀 ~ file: filterContext.js:37 ~ updateFilterValue ~ name:", name, value)


        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } })
    }

    const clearFilters = () => {
        return dispatch({ type: "CLEAR_FILTERS" })
    }

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
        dispatch({ type: "SORTING_PRODUCTS", payload: products })
    }, [products, state.sorting_value, state.filters]);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])


    return (
        <FilterContext.Provider
            value={{
                ...state,
                setGridView,
                setListView,
                sorting,
                updateFilterValue,
                clearFilters,
            }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);

}
