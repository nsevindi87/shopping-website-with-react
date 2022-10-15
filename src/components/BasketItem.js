import React from 'react'

function BasketItem({ pItem, pProduct }) {
  return (
    <>
      <li className='basket-item'>
        {pProduct.title} <span>x {pItem.amount}</span>
      </li>
      <style jsx>{`
              .basket-item {
                padding-bottom: 10px;
                font-size: 17px;
              }
              .basket-item span {
                color: #999;
              }
			`}
      </style>
    </>
  )
}

export default BasketItem
