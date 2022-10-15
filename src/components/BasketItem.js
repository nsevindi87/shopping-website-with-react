import React from 'react'

function BasketItem({pItem, pProduct}) {
  return (
    <div>
      {pProduct.title} x {pItem.amount}
    </div>
  )
}

export default BasketItem
