import React from 'react'






function Product({pProduct, pTotal, pMoney, pBasket, pSetBasket}) {

  const basketItem = pBasket.find(item => item.id === pProduct.id)



  const addBasket = () =>{
    const checkBasket = pBasket.find(item => item.id === pProduct.id)

    if (checkBasket){
      checkBasket.amount += 1
      pSetBasket([...pBasket.filter(item => item.id !== pProduct.id), checkBasket])
    }else{
      pSetBasket([...pBasket, {
        id: pProduct.id,
        amount:1
      }])
    }
  }

  const removeBasket = ()=>{
    const currentBasket = pBasket.find(item => item.id === pProduct.id)
    const basketWithoutCurrent = pBasket.filter(item => item.id !== pProduct.id)
    currentBasket.amount -= 1

    if (currentBasket.amount === 0){
      pSetBasket([...basketWithoutCurrent])
    }else{
      pSetBasket([...basketWithoutCurrent, currentBasket])
    }

  }




  return (
    <>
      <div className="product">
        <img src={pProduct.image} alt="" />
        <h6>{pProduct.title}</h6>

        <div className="price">$ {pProduct.price}</div>

        <div className="actions">
          <button disabled={!basketItem} onClick={removeBasket}>Cikart</button>
          <span className="amount">{basketItem && basketItem.amount || 0}</span>
          <button disabled={pTotal+pProduct.price > pMoney} onClick={addBasket}>Ekle</button>
        </div>




        <style jsx>
          {`
           .product {
            padding:15px;
            background:#fff;
            border: 1px solid #ddd;
            margin-bottom:20px;
            width:24%
          }
          .product img {
            width: 100%;
          }
          `}
        </style>
      </div>
    </>
  )
}

export default Product


