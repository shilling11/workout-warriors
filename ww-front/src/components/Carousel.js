import React, {useState} from 'react';
import './Carousel.css';
import { CarouselData } from './CarouselData';
import {Link} from 'react-router-dom';

const Carousel = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0){
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  return (
    <>
    <div className="carousel-container">
    <img src="images/left-arrow.png" alt="" className="left-arrow" onClick={prevSlide} />
    {CarouselData.map((slide, index) => {
      return(
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && (
            <>
            <Link to='/products' className='carousel-item'>
            <img src={slide.image} alt={slide.name} className='carousel-image'/>
            <p className="carousel-alt">{slide.name}</p>
            </Link>
            </>
          )}
        </div>
      )
    })}
    <img src="images/right-arrow.png" alt="" className="right-arrow" onClick={nextSlide} />
    </div>
    </>
  )
}

export default Carousel