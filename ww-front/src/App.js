import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import About from './components/pages/About';
import Blogs from './components/pages/Blogs';
import Contact from './components/pages/Contact';
import ShowCart from './components/ShowCart'
import Footer from './components/Footer';


function App() {

  return (
    <>
    <Router>
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/about' element={<About/>} />
      <Route path='blogs' element={<Blogs/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/addToCart' element={<ShowCart/>} />
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
