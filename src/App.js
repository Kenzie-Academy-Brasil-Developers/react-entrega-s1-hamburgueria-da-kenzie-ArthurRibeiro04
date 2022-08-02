
import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import Kart from './components/Kart';


  

function App() {

  const [products, setProducts] = useState()
  const [carrinho, setCarrinho] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then(res => res.json())
    .then(res => setProducts(res))
    .catch(err => console.log(err))
  }, [])

  
  return (
    <div className="App">
      <Header setSearch={setSearch}></Header>
      {
        products ? <>
        <ProductList products={products} carrinho={carrinho} setCarrinho={setCarrinho} search={search}></ProductList>
  <Kart carrinho={carrinho} setCarrinho={setCarrinho} search={search}></Kart></>
        : <h1>Loading</h1>
      }

      
      

      
    </div>
  );
}

export default App;
