import React, { useEffect, useState, useRef } from 'react';
import { Content, Wrapper } from './SearchBar.styles';
import searchIcon from '../../images/search-icon.svg';
import PropTypes from 'prop-types';

const SearchBar = ({ setSearchTerm }) => {

    const [state, setState] = useState('');
    const initial = useRef(true);


    useEffect(() => {

        if (initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer)
    }, [state, setSearchTerm]);
    console.log("state", state)
    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input
                    type="text"
                    placeholder='Search Movie'
                    onChange={event => setState(event.currentTarget.value)}
                    value={state} />

            </Content>
        </Wrapper>
    )
}

SearchBar.propTypes = {
    callback : PropTypes.func
};
export default SearchBar