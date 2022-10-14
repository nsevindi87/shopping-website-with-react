import './App.css';
import {useState, useEffect} from 'react';
import Header from './components/Header';
import products from './products.json';
import Product from './components/Product'

function App() {

  const [money, setMoney] = useState(100)

  return (
    <>
      <Header pMoney={money}/>
      
      {products.map(product => (
        <Product pProduct={product}/>
      ))}
    
    </>
  );
}

export default App;
