import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faStoreAlt } from '@fortawesome/free-solid-svg-icons'

import PaypalLogo from '../assets/images/paypal-logo.png';
import img1 from '../assets/images/products/Innisfree-Jeju-Cherry-Blossom-Tone-up-Cream-50ml.jpg';

import '../assets/scss/cart.scss';

function Cart() {
  return (
    <div className="cart-container">
      <div className="cart-item-list margin-top">
        <table className="cart-table">
          <tr className="table-header">
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <img src={img1} width="100" />
              <div>Jeju Cherry Blossom Tone-up Cream (50ml)</div>
              <p>Innisfree</p>
              <p>₱1,250.00</p>
            </td>
            <td>Smith</td>
            <td>50</td>
            <td>50</td>
          </tr>
          <tr>
            <td>
              <img src={img1} width="100" />
              <div>Jeju Cherry Blossom Tone-up Cream (50ml)</div>
              <p>Innisfree</p>
              <p>₱1,250.00</p>
            </td>
            <td>Jackson</td>
            <td>94</td>
            <td>94</td>
          </tr>
        </table>
      </div>
      <div className="cart-details">
        <div className="line"></div>
        <div className="cart-detail-content">
          <div className="cart-total margin-top"><span className="cart-total-label">Cart Total :</span> ₱3,250.00</div>
          <p>Shipping and taxes are calculated at checkout.</p>

          <div className="terms margin-top">
            <input type="checkbox" />
            I agree to the <span className="teal-text bold">Terms & Conditions</span>.
          </div>

          <div className="margin-top">
            <button className="primary-button">Checkout <FontAwesomeIcon icon={faShoppingBag} className="list-icon" /></button>
          </div>
          <button className="primary-button paypal-button"><img src={PaypalLogo} width="90%"/></button>
        </div>

        <div className="logo-filler margin-top center">
          <FontAwesomeIcon className="" icon={faShoppingBag} />
        </div>
      </div>
    </div>
  )
}

export default Cart;