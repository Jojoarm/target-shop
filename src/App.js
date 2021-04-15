import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductInfo from './components/ProductInfo';
import Category from './components/Category';
import Checkout from './components/Checkout';
import Order from './components/Order/Order';
import Footer from './components/Footer';
import { useStateValue } from './StateContext';

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])



  const fetchProducts = async () => {
    //fetching the products from the commerce.js api
    //set the limit
    const limit = 200;
    const { data } = await commerce.products.list({limit: limit});
    setProducts(data)
  }

  const fetchCategories = async () => {
    //fetching the categories of product from the commerce.js api
    const { data } = await commerce.categories.list();
    setCategories(data)
  }


  useEffect(() =>{
    fetchProducts()
    fetchCategories()
    // fetchCart()
  }, [])

  // console.log(categories)
  // console.log('The products', products)
 
  return (
    <Router>
        <div className="App">
          <Header />
          <Switch>
              <Route exact path = "/">
                  <Home products={products} categories={categories} />
              </Route>
              <Route path="/product-details/:id" component={ProductInfo} />
              <Route path="/category/:id" component={Category} />
              <Route path="/checkout">
                <Checkout />
              </Route>
              <Route path="/order">
                <Order />
              </Route>
          </Switch>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
