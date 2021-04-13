import React from 'react'
import './Product.css'

const CategoryBanner = ({ product }) => {
    return (
        <div className="product__banner">
                <img src={product.media.source} alt={product.name} />
                <p className="banner__name">{product.extra_fields[0].name}</p>
        </div>
    )
}

export default CategoryBanner
