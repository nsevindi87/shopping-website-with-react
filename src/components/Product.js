import React from 'react';
import {moneyFormat} from '../helpers'






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

        <div className="price">$ {moneyFormat(pProduct.price)}</div>

        <div className="actions">
          <button className='sell-btn' disabled={!basketItem} onClick={removeBasket}>Cikart</button>
          <span className="amount">{basketItem && basketItem.amount || 0}</span>
          <button className='buy-btn' disabled={pTotal+pProduct.price > pMoney} onClick={addBasket}>Ekle</button>
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

          .product h6 {
            font-size: 20px;
            margin-bottom: 10px;
          }

          .product .price {
            font-size: 20px;
            color: #179b17;
          }

          .product .actions {
            display: flex;
            align-items: center;
            margin-top: 15px;
          }

          .actions button {
            height: 40px;
            padding: 0 15px;
            flex: 1;
            cursor: pointer;
          }

          .actions button[disabled] {
            opacity: .3;
            cursor: not-allowed;
          }

          .actions .buy-btn {
            background: #61dafb;
            font-size: 14px;
            font-weight: 500;
            border-radius: 0 4px 4px 0;
          }

          .actions .sell-btn {
            background: #ccc;
            font-size: 14px;
            color: #333;
            font-weight: 500;
            border-radius: 4px 0 0 4px;
          }

          .actions .amount {
            width: 50px;
            text-align: center;
            border: 1px solid #ddd;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 17px;
            font-weight: bold;
            color: #555;
          }
          `}
        </style>
      </div>
    </>
  )
}

export default Product


