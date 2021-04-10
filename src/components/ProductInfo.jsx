import { Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { commerce } from '../lib/commerce'
import Product from './Product'
import './ProductInfo.css'

const ProductInfo = ({match}) => {
    // console.log(match)
    const [product, setProduct] = useState([])

    const fetchProduct = async () => {
        const { data } = await commerce.products.list();
        const dataSet = data?.filter(item => item.id === match.params.id)
        setProduct(dataSet[0])
    }

    useEffect(() =>{
        fetchProduct()
    }, [product])

    // const product = products?.filter(item => item.id === match.params.id)

    return (
        <div className="product__infoContainer">
            <div className="product__category">
                <p>Back to Categories</p>
            </div>
            <div className="product__details">
                <div className="product__img">
                    <img src={product?.media?.source} alt={product?.name} />
                </div>
                <div className="product__information">
                    <h2 className="product__name">{product?.name}</h2>
                    <Typography className="product__characteristic" dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" />
                    {/* <p className="product__characteristic">{product?.description}</p> */}
                    <div className="product__price">
                        <small>₦</small>  
                        <strong>{product?.price?.formatted}</strong>  
                    </div>
                    <div className="product__buttons">
                        <button className="basket__button">Add to Basket</button>
                        <button className="buynow__button">Buy Now</button>
                    </div> 
                </div>
            </div>
            <div className = "related__products">
                <h3>Related Products</h3>
                <div className="home__row">
                    {product.related_products?.map(product => (
                        <div key={product.id}>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/product-details/${product.id}`} >
                                <Product product={product} />
                                {/* {location.reload()} */}
                            </Link> 
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}



export default ProductInfo
