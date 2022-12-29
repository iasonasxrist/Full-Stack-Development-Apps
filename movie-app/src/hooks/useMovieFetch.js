import { useState, useEffect, useCallback } from 'react';
import { isPersistedState } from '../helpers';
export const useMovieFetch = (movieId) => {
    console.log("kEY", movieId)
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const API_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = 'bcc4ff10c2939665232d75d8bf0ec093';


    const fetchMovieById = useCallback(async (movieId) => {
        try {
            setLoading(true)
            setError(false)
            const movie = await (await fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}`)).json();

            const credits = await (await fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)).json();
            const directors = credits.crew.filter((member) =>
                member => member.job === 'Direct'
            )
            console.log(directors)

            setState({
                ...movie,
                actors: credits.cast,
                directors

            });
            setLoading(false)
        }
        catch (error) {
            setError(true);
        }

    }, [])

    useEffect(() => {
        const sessionState = isPersistedState(movieId)
        if (sessionState) {
            setState(sessionState)
            setLoading(false)
            return;
        }

        setLoading(true)
        fetchMovieById(movieId)

    }, [movieId])


    //Write to SessionStorage
    useEffect(() => {

        sessionStorage.setItem(movieId, JSON.stringify(state))
    }, [movieId, state])


    return { state, loading, error };
}

