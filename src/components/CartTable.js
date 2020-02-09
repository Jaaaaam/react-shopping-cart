import React from 'react';
import img1 from '../assets/images/products/Innisfree-Jeju-Cherry-Blossom-Tone-up-Cream-50ml.jpg';


function CartTable({ headers, data }) {
  const renderHeader = () => {
    return (
      <tr className="table-header">
        {
          headers.map((header) => (
            <th>{header}</th>
          ))
        }
      </tr>
    )
  }

  const renderBody = () => {
    return (
      data.map(({name, image, brand, price, qty}) => (
        <tr>
          <td className="test">
            <img src={image} width="100" />
            <div>{ name }</div>
            <p>{ brand }</p>
            <p>#84459765488100</p>
          </td>
          <td>₱ { price }</td>
          <td>{ qty }</td>
          <td>₱ { price * qty }</td>
        </tr>
      ))
    )
  }
  return (
    <table className="cart-table">
      { renderHeader() }
      { renderBody() }
    </table>
  )
}

export default CartTable;