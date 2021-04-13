import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { commerce } from '../lib/commerce'
import Product from './Product'
import './Category.css'
import { CircularProgress } from '@material-ui/core'

const Category = ({match}) => {
    console.log(match)
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        const dataSet = data?.filter(item => item.categories[0].id === match.params.id)
        setProducts(dataSet)
    }

    console.log(products)

    useEffect(() =>{
        fetchProducts()
    }, [])

    if (!products.length) return(
        <div className="spinner">
            <CircularProgress />
        </div>
    ) 


    return (
        <div className="products__container">
            <p className="category__title">{products[0]?.categories[0]?.name} <span>({products.length})</span></p>
            <div className="products__row">
                {products?.map(product => (
                    <div key={product.id}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/product-details/${product.id}`} >
                            <Product product={product} />
                        </Link> 
                    </div>
                    ))}   
            </div>
        </div>
    )
}

export default Category
