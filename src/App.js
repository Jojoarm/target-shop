import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductInfo from './components/ProductInfo';

function App() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data)
  }

  useEffect(() =>{
    fetchProducts()
  }, [])

  console.log(products)
  

  return (
    <Router>
        <div className="App">
          <Header />
          <Switch>
              <Route exact path = "/">
                  <Home products={products} />
              </Route>
              <Route path="/product-details/:id" component={ProductInfo}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
