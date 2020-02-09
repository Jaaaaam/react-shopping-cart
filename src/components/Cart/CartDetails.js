import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

import PaypalLogo from '../../assets/images/paypal-logo.png';

function CartDetails() {
  return (
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
  )
}

export default CartDetails;