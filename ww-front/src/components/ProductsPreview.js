import React from 'react';
import '../App.css';
import './ProductsPreview.css';
import Carousel from './Carousel';
import {CarouselData} from './CarouselData';

function ProductsPreview() {
  return (
    <div className="products-container">
        <h2 className="browse">BROWSE OUR RANGE OF SUPPLEMENTS</h2>
        <Carousel slides={CarouselData} className='carousel' />
    </div>
  )
}

export default ProductsPreview;