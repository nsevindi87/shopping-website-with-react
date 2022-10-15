import React from 'react'
import BasketItem from './BasketItem'

function Basket({pBasket, pProducts}) {
  return (
    <div>
      {pBasket.map(item =>(
        <BasketItem pItem ={item} pProduct={pProducts.find(p => p.id ===item.id)}/>
      ))}
      <div>
        Toplam:{}
      </div>
    </div>
  )
}

export default Basket
