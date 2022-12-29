import { useState, useEffect } from "react";
//SessionStorage
import { isPersistedState } from "../helpers";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);


    const fetchMovies = async (page, searchTerm = '') => {

        const API_URL = searchTerm ? `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&language=en-US&query=${searchTerm}&page=${page}` :
            `https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093&page=${page}`;
        try {
            setError(false);
            setLoading(true);

            await fetch(API_URL)
                .then(response => response.json())
                .then(data => setState(prev => ({
                    ...data,
                    results:
                        page > 1 ? [...prev.results, ...data.results] : [...data.results],
                })))
        }
        catch (error) {
            setError(true);
        }
        setLoading(false);
    }
    useEffect(() => {

        if (!searchTerm) {
            const sessionState = isPersistedState('homeState');

            if (sessionState) {
                console.log("Grabbing")
                setState(sessionState)
                // not type <return>... Blocks the code below 
            }
        }
        console.log("APIII")
        setState(initialState)
        fetchMovies(1, searchTerm)
    }, [searchTerm])

    useEffect(() => {
        if (!isLoadingMore) return;

        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false)
    }, [isLoadingMore, searchTerm, state.page]);


    useEffect(() => {
        if (!searchTerm) {
            sessionStorage.setItem('homeState', JSON.stringify(state))
        }
    }, [searchTerm, state]);

    return { state, loading, error, searchTerm, setSearchTerm, isLoadingMore, setIsLoadingMore };

}