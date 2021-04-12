import React from 'react'
import './Home.css'
import Product from './Product'
import {Link}  from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

const Home = ({ products, categories }) => {

    console.log(products)
    // console.log(products?.filter(product => product.sku == 'Top Selling'))
    
      //If the product has not beeng fetch a circular loading should be shown
      if (!products.length) return(
        <div className="spinner">
            <CircularProgress />
        </div>
    ) 

    return (
        <div className="home">
           <div className="home__container">
                <div className="category__container">
                    <p className="title">Categories</p>
                    <div className="categories">
                        {categories?.map(category => (
                            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/category/${category.id}`} >
                                <div className="category" key={category.id}>{category.name} ({category.products})</div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="top__selling">
                    <p className="title">Top Selling</p>
                    <div className="home__row">
                        {products?.filter(product => product.sku == 'Top Selling')
                        ?.map(product => (
                            <div key={product.id}>
                                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/product-details/${product.id}`} >
                                    <Product product={product} />
                                </Link> 
                            </div>
                        ))}   
                    </div>
                </div>
           </div>
           <div className="categories">
                <p className="title">Featured Categories</p>
                <div className="category__container">
                    
                </div>
            </div>
        </div>
    )
}

export default Home
