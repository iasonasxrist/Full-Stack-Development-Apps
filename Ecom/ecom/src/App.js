import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import SingleProduct from './SimpleProduct';
import Cart from './Cart';
import ErrorPage from './ErrorPage';
import Header from './components/Header';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';


const App = () => {


  const theme = {
    colors: {
      heading: "rgb(24,24,29)",
      text: "rgba(29,29,29,.8)",
      white: "#fff",
      black: "#212529",
      helper: "#84990ff",

      bg: "#D9D9D6",
      footer_bg: "#0a1435",
      btn: "rgb(98,84,243)",
      border: "rgba(98,84,243,0.5)",
      hr: "#fff",
      gradient:
        "linear-gradient(0deg,rgb(132,144,255) 0%, egb(98 189 252) 100%)",
      shadow: "rgba(0,0,0,0.02) 0px 1px 3px 0px, rbga(27, 31, 35, .15) 0px 0px 0px 1px;",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contacts' element={<Contact />} />
          <Route path='/singleproduct/:id' element={<SingleProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;
