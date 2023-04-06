import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';

const HeroSection = ({ name }) => {

  return <Wrapper>
    <div className='container'>
      <div className='grid grid-two-column'>
        <div className='hero-section-data'>
          <p className='intro-data'>
            Welcome to <h1>Jason Ecommerce</h1>
          </p>
          {/* <h1>{name}</h1> */}

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quas
            quisquam qui sunt esse, cupiditate dignissimos! Magnam vero
            necessitatibus nobis aperiam enim corporis vitae dignissimos?
          </p>
          <NavLink to="/">
            <Button>
              show me
            </Button>
          </NavLink>
        </div>
        <div className='hero-section-image'>
          <figure>
            <img src="./images/hero.jpg" alt="" className='img-style' />
          </figure>
        </div>
      </div>
    </div>

  </Wrapper>
}



const Wrapper = styled.section`
      
  padding: 12rem 0rem;
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0rem ;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
`;

export default HeroSection