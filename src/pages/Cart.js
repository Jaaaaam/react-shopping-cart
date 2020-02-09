import React from 'react';

import CartDetails from '../components/Cart/CartDetails';
import CartTable from '../components/CartTable';
import img1 from '../assets/images/products/Innisfree-Jeju-Cherry-Blossom-Tone-up-Cream-50ml.jpg';

import '../assets/scss/cart.scss';

function Cart() {
  return (
    <div className="cart-container">
      <div className="cart-item-list margin-top">
        <CartTable
          headers={['Product', 'Price', 'Qty', 'Total']}
          data={[
            { name: 'Jeju Cherry Blossom Tone-up Cream (50ml)', image: img1, brand: 'Innisfree', price: 1250, qty: 1 },
            { name: 'Jeju Cherry Blossom Tone-up Cream (50ml)', image: img1, brand: 'Innisfree', price: 1250, qty: 1 }
          ]}
        />
      </div>
      <CartDetails />
    </div>
  )
}

export default Cart;