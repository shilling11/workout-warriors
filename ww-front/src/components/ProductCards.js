import {Link} from 'react-router-dom';
import {ProductsData} from './ProductsData';
import './ProductCards.css';
import Navbar from './Navbar';
import '../App.css'

function ProductCards() {
    const displayCards = () => {
        return ProductsData.map((product, i) => {
            return(
                <>
                <div key={i} className="product-container">
                    <img src={product.image} alt="" className="product-image" />
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">£{product.price}</p>

                    <form action='/addToCart' method='POST' className='product-form'>
                    <input type='hidden' name='image' value={product.image}/>
                    <input type='hidden' name='name' value={product.name}/>
                    <input type='hidden' name='price' value={product.price}/>
                    <input type='number' min='1' name='qty' placeholder='Qty' defaultValue='1'/>
                    <button type='submit' className='add-to-cart'>Add to cart</button>
                    </form>
                </div>
                </>
            )
        })
    }

    return(
        <>
        <Navbar/>
        <div className="full-product-page">
        <Link to='/addToCart' className='basket'><img src="images/basket.png" alt="" /></Link>
        <h2 className="prod-text">PRODUCTS</h2>
            <div className="products-page">
                {displayCards()}
            </div>
            </div>
        </>
    )
    }

export default ProductCards;