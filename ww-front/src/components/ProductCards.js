import React from 'react';
import {ProductsData} from './ProductsData';
import './ProductCards.css';
import Navbar from './Navbar';

function ProductCards() {
    const displayCards = () => {
        return ProductsData.map((product, i) => {
            return(
                <>
                <div key={i} className="product-container">
                    <img src={product.image} alt="" className="product-image" />
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">£{product.price}</p>
                    <button className="add-to-cart">Add to cart</button>
                </div>
                </>
            )
        })
    }

    return(
        <>
        <Navbar/>
        <h2 className="prod-text">PRODUCTS</h2>
            <div className="products-page">
                {displayCards()}
            </div>
        </>
    )
    }

export default ProductCards;