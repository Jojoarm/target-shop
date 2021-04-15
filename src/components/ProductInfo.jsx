import { CardMedia, CircularProgress, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { commerce } from '../lib/commerce'
import { useStateValue } from '../StateContext'
import Product from './Product'
import './ProductInfo.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const ProductInfo = ({match}) => {
    // console.log(match)
    
    const [product, setProduct] = useState([])
    const [{ basket }, dispatch] = useStateValue();

    // const [cart, setCart] = useState({});

    const fetchProduct = async () => {
        const limit = 200;
        const { data } = await commerce.products.list({limit: limit});  
        const dataSet = data?.filter(item => item.id === match.params.id)
        setProduct(dataSet[0])
    }

    useEffect(() =>{
        fetchProduct()
    }, [match])

    //Adding products to the cart
    const addtoBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: product.id,
                title: product.name,
                image: product?.media?.source,
                price: product?.price?.formatted,
                quantity: 1,
            }, 
        })
    }
    
    //If the product has not beeng fetch a circular loading should be shown
    if (!product.name) return(
        <div className="spinner">
            <CircularProgress />
        </div>
    ) 
    return (
        <div className="product__infoContainer">
            <div className="product__category">
            <Link to={`/category/${product.categories[0].id}`} >
                <p>Back to Categories</p>
            </Link>
            </div>
            <div className="product__details">
                <div className="product__info">
                    <img className="product__img" src={product?.media?.source} alt={product?.name} />
                    <div className="product__buttons">
                        <button className="basket__button" onClick={addtoBasket}>Add to Basket</button>
                        <Link style={{ textDecoration: 'none'}} to="/order" >
                            <button className="buynow__button" onClick={addtoBasket}>Buy Now</button>
                        </Link>
                    </div> 
                </div>
                <div className="product__information">
                    <h2 className="product__name">{product?.name}</h2>
                    <Typography className="product__characteristic" dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" />
                    {/* <p className="product__characteristic">{product?.description}</p> */}
                    <div className="product__price">
                        <small>₦</small>  
                        <strong>{product?.price?.formatted}</strong>  
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
                            </Link> 
                        </div>
                    ))}
                    {/* </Swiper> */}
                </div>
            </div>
        </div>
    )
}

export default ProductInfo
