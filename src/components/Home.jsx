import React from 'react'
import './Home.css'
import Product from './Product'
import {Link}  from 'react-router-dom'

const Home = ({ products }) => {
    console.log(products?.filter(product => product.sku == 'Top Selling'))
    
    return (
        <div className="home">
           <div className="home__container">
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
                <div className="categories">
                    <p className="title">Featured Categories</p>
                    <div className="category__container">

                    </div>
                </div>
           </div>
        </div>
    )
}

export default Home
