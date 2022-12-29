import React, { useState, useEffect } from 'react';
import { Wrapper, Content, Text } from '../HeroImage/HeroImage.styles';
import PropTypes from 'prop-types';

const HeroImage = ({ title, image, text }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>

  )
}
HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string

}

export default HeroImage