import React from 'react'

function Product({pProduct}) {
  return (
    <div>
      <div className="product">
        <h6>{pProduct.title}</h6>
        <div className="price">$ {pProduct.price}</div>
        <div className="actions">
          <button>Sat</button>
          <span className="amount">0</span>
          <button>Satin Al</button>
        </div>
        <style jsx>
          {`
          .product{
            padding:10px;
            background:#fff;
            border: 1px solid #ddd;
            margin-bottom:20px;
          }`}
        </style>
      </div>
    </div>
  )
}

export default Product


