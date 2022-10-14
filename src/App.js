import './App.css';
import {useState, useEffect} from 'react';
import Header from './components/Header';
import products from './products.json';
import Product from './components/Product'

function App() {

  const [money, setMoney] = useState(100)
  const [basket, setBasket] = useState([])

  useEffect(()=>{
    console.log(basket)
  }, [basket])

  return (
    <>
      <Header pMoney={money}/>

      {products.map(product => (
        <Product key={product.id} pBasket={basket} pSetBasket={setBasket} pProduct={product}/>
      ))}
    
    </>
  );
}

export default App;
