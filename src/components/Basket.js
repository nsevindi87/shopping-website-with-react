import React from 'react'
import BasketItem from './BasketItem'

function Basket({pBasket,pResetBasket, pTotal, pProducts}) {
  return (
    <>
      {pBasket.map(item =>(
        <BasketItem pItem ={item} pProduct={pProducts.find(p => p.id ===item.id)}/>
      ))}
      <div>
        Toplam:{pTotal}
      </div>
      <button onClick={pResetBasket}>Sepeti Sifirla</button>

    </>
  )
}

export default Basket
