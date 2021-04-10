import React from 'react'
import './Product.css'

const Product = ({ product }) => {
    // console.log('The products are', product)
    return (
        <div className="product">
            <img src={product.media.source} alt={product.name} />
            <div className="product__info">
                <p>{product.name}</p>
                <p className="product__price">
                    <small>₦</small>  
                    <strong>{product.price.formatted}</strong>  
                </p>    
                <div className="product__rating">
                    <p>🌟</p>
                    <p>🌟</p>
                    <p>🌟</p>
                </div>
            </div> 
            {/* <button>Add to Cart</button>  */}
        </div>
    )
}

export default Product
