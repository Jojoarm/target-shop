import React from 'react'
import './Home.css'
import Product from './Product'
import {Link}  from 'react-router-dom'
import { CircularProgress, Grid } from '@material-ui/core'
import CategoryBanner from './CategoryBanner'

const Home = ({ products, categories }) => {

    console.log(products?.filter(product => product.sku == 'Category banner'))
    // console.log(products?.filter(product => product.sku == 'Top Selling'))
    
      //If the product has not beeng fetch a circular loading should be shown
      if (!products.length) return(
        <div className="spinner">
            <CircularProgress />
        </div>
    ) 

    //extra_fields[0].name
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

           <div className="banner__container">
                <p className="banner__title">Featured Categories!</p>
                <div className="banner">
                <Grid container justify="center" spacing={3}>
                {products?.filter(product => product.sku == 'Category banner').map((product) => (
                    <Grid item key={product.categories[0].id} xs={12} sm={6} md={4} lg={2}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/category/${product.categories[0].id}`} >
                            <CategoryBanner product={product} />
                        </Link>
                    </Grid>
                    ))}
                </Grid>
                </div>
            </div>
        </div>
    )
}

export default Home
