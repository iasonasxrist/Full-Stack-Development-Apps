import React, { useState, useEffect } from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import NoImage from '../images/no_image.jpg';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.css';
import { useHomeFetch } from '../hooks/useHomeFetch';
import HeroImage from './HeroImage';
import Grid from '../Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';

const Home = () => {
    const {
        state,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        isLoadingMore,
        setIsLoadingMore
    } = useHomeFetch();

    const [popMovies, setPopMovies] = useState([]);

    const fetchPopular = async (page) => {

        const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093&page=${page}`;
        console.log("uirl", API_URL)
        try {

            await fetch(API_URL)
                .then(response => response.json())
                .then(data => setPopMovies(data.results))
        }
        catch (error) {
            console.log(`Error happened ${error}`)
        }
    }
    console.log()

    useEffect(() => {
        fetchPopular(1)
    }, [])
    // console.log("!!!!!", state)
    if (error) return <div>Something went wrong ...</div>;

    return (
        <>
            {searchTerm.length === 0 && state.results[0] ?
                (<HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].title}
                    text={state.results[0].overview}

                />
                ) : null}

            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
                {state.results.map(movie =>
                    <Thumb key={movie.id}
                        clickable
                        image={
                            movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        movieId={movie.id}
                    />
                )}
            </Grid>

            {loading && <Spinner />}

            {state.page < state.total_pages && !loading ? (
                <Button
                    text="Load More"
                    callback={() => setIsLoadingMore(true)} />
            ) : null


            };

            {/* <div className='container'>
                <div className='grid'>
                    {popMovies.map((movie) =>
                        <MovieBox key={movie.id} {...movie} />
                    )}
                </div>
            </div> */}

        </>
    );
}
export default Home
