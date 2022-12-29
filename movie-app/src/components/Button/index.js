import React from "react";
import { Wrapper } from "../Button/Button.styles";
import PropTypes from 'prop-types';


const Button = ({ callback, text }) => {
    return (
        <Wrapper type="button" onClick={callback}>
            {text}
        </Wrapper>
    );
}
Button.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func,
}

export default Button;