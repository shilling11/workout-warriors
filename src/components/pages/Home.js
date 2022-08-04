import React from 'react';
import Header from '../Header';
import Intro from '../Intro';
import Testimonials from '../Testimonials'
import ProductsPreview from '../ProductsPreview';
import ArticlesPreview from '../ArticlesPreview';
import '../../App.css';
import { ArticlesData } from '../ArticlesData';

function Home(){
    return(
        <>
        <Header/>
        <Intro/>
        <Testimonials/>
        <ProductsPreview/>
        <ArticlesPreview/>
        </>
    )
}

export default Home;