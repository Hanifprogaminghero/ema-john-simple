import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, useProducts] = useState(first10);

    const [cart, setcart] = useState([]);

    const handleAddProducts = (product) => {
          const newCart = [...cart, product];
          setcart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd => <Product 
                        handleAddProducts = {handleAddProducts}
                        product={pd}>
                        </Product>)
                }
           
            </div>
            <div className="card-container">
               <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;