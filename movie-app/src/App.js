import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px; 
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535; 
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;  
  }

  body {  
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--white);
    }
  }
`
const App = () => {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/:movieId' element={<Movie/>} />
          <Route path='/*' element={<NotFound />} />

        </Routes>
        <GlobalStyle />
      </Router>

    </div>

  );
}

export default App;
