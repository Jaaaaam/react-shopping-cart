import React from 'react';
import TopNav from './components/TopNav';
import Products from './pages/Products';
import Cart from './pages/Cart';

import './assets/scss/main.scss';

function App() {
  return (
    <div className="main-container">
      <TopNav />
      <Products />
      {/* <Cart /> */}
    </div>
  );
}

export default App;
