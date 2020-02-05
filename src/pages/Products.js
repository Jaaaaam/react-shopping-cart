import React from 'react';
import img1 from '../assets/images/products/Innisfree-Jeju-Cherry-Blossom-Tone-up-Cream-50ml.jpg';

import '../assets/scss/products.scss';

function Products() {
  return (
    <div className="product-container">
      <h2 className="center margin-top">Popular Products</h2>
      <div className="tagline">
        <p className="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <p className="center"> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        <p className="center">quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="center margin-top">
        <div className="product-list-container">
          <div className="product">
            <img src={img1} width="200" />
            <div className="product-details">
              <div className="product-name">Jeju Cherry Blossom Tone-up Cream (50ml)</div>
              <div className="product-brand">Innisfree</div>
              <div>₱1,250.00</div>
            </div>
          </div>

          <div className="product">
            <img src={img1} width="200" />
            <div className="product-details">
              <div className="product-name">Jeju Cherry Blossom Tone-up Cream (50ml)</div>
              <div className="product-brand">Innisfree</div>
              <div>₱1,250.00</div>
            </div>
          </div><div className="product">
            <img src={img1} width="200" />
            <div className="product-details">
              <div className="product-name">Jeju Cherry Blossom Tone-up Cream (50ml)</div>
              <div className="product-brand">Innisfree</div>
              <div>₱1,250.00</div>
            </div>
          </div><div className="product">
            <img src={img1} width="200" />
            <div className="product-details">
              <div className="product-name">Jeju Cherry Blossom Tone-up Cream (50ml)</div>
              <div className="product-brand">Innisfree</div>
              <div>₱1,250.00</div>
            </div>
          </div><div className="product">
            <img src={img1} width="200" />
            <div className="product-details">
              <div className="product-name">Jeju Cherry Blossom Tone-up Cream (50ml)</div>
              <div className="product-brand">Innisfree</div>
              <div>₱1,250.00</div>
            </div>
          </div><div className="product">
            <img src={img1} width="200" />
            <div className="product-details">
              <div className="product-name">Jeju Cherry Blossom Tone-up Cream (50ml)</div>
              <div className="product-brand">Innisfree</div>
              <div>₱1,250.00</div>
            </div>
          </div><div className="product">
            <img src={img1} width="200" />
            <div className="product-details">
              <div className="product-name">Jeju Cherry Blossom Tone-up Cream (50ml)</div>
              <div className="product-brand">Innisfree</div>
              <div>₱1,250.00</div>
            </div>
          </div><div className="product">
            <img src={img1} width="200" />
            <div className="product-details">
              <div className="product-name">Jeju Cherry Blossom Tone-up Cream (50ml)</div>
              <div className="product-brand">Innisfree</div>
              <div>₱1,250.00</div>
            </div>
          </div><div className="product">
            <img src={img1} width="200" />
            <div className="product-details">
              <div className="product-name">Jeju Cherry Blossom Tone-up Cream (50ml)</div>
              <div className="product-brand">Innisfree</div>
              <div>₱1,250.00</div>
            </div>
          </div><div className="product">
            <img src={img1} width="200" />
            <div className="product-details">
              <div className="product-name">Jeju Cherry Blossom Tone-up Cream (50ml)</div>
              <div className="product-brand">Innisfree</div>
              <div>₱1,250.00</div>
            </div>
          </div><div className="product">
            <img src={img1} width="200" />
            <div className="product-details">
              <div className="product-name">Jeju Cherry Blossom Tone-up Cream (50ml)</div>
              <div className="product-brand">Innisfree</div>
              <div>₱1,250.00</div>
            </div>
          </div><div className="product">
            <img src={img1} width="200" />
            <div className="product-details">
              <div className="product-name">Jeju Cherry Blossom Tone-up Cream (50ml)</div>
              <div className="product-brand">Innisfree</div>
              <div>₱1,250.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="center margin-bottom margin-top">
        <button className="primary-button product-button">Load More</button>
      </div>
    </div>
  )
}

export default Products;