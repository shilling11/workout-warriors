import React, {useEffect, useState} from 'react'
import Navbar from './Navbar';
import '../App.css';
import './ShowCart.css';

function ShowCart() {
    const [item, setItem] = useState([
        {
            image: '',
            name: '',
            price: 0,
            qty: 0,
            total: 0
        }
    ]);
    let sum = 0;

    useEffect(() => {
        fetch('http://localhost:3001/addToCart').then(res => res.json()).catch(data => setItem(undefined)).then(data => setItem(data));
    }, [item]);

  return (
    <>
    <Navbar/>
    <div className="cart-container">   
        {item.map((prod, i) => {
            sum += prod.total;
            return(
                <div className="item-container">
                    <img src={prod.image} alt="" className="item-image" />
                    <p className="item-name">{prod.name}</p>
                    <p className="item-qty">Qty: {prod.qty}</p>
                    <p className="item-price">£{(prod.price).toFixed(2)}</p>
                    <p className="item-total">Sub-total: £{(prod.total).toFixed(2)}</p>
                    <form action="/deleteItem" method='POST'>
                        <input type="hidden" value={prod.name} name='name'/>
                        <button type='submit' className="delete">Delete item</button>
                    </form>
                </div>
            )
        })
    }
    <p className="sum">Total: £{sum.toFixed(2)}</p>
    </div>
    </>
  )
}

export default ShowCart;