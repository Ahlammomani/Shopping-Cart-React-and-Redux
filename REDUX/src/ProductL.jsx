import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './Slice';


const ProductL = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://67a4291731d0d3a6b7857cd9.mockapi.io/product');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <div className="products">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img className="product-image" src={product.image} alt={product.name} />
            <div className="product-details">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price} JD</p>
              <button 
                className="add-to-cart-button" 
                onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductL;
