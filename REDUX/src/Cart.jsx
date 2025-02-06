import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from './Slice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cart || []); // تأكد من أن cartItems مصفوفة
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(cart => (
          <div key={cart.id}>
            <h2>{cart.name}</h2>
            <p>{cart.price} USD</p>
            <input
              type="number"
              value={cart.quantity}
              onChange={(e) => dispatch(updateQuantity({ id: cart.id, quantity: parseInt(e.target.value) }))} 
            />
            <button onClick={() => dispatch(removeFromCart(cart.id))}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
