import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'
import './CartProduct.css'

const CartProduct = ({ id, name, quantity, image, price }) => {
    return (
        <Card>
            <CardMedia image={image} alt={name} className="cart__media" />
            <CardContent className="cart__content">
                <Typography variant="h4">{name}</Typography>
                <Typography variant="h5">{price}</Typography>
            </CardContent>
            <CardActions className="cart__actions">
                <div className="cart__buttons">
                    <Button type="button" size="small">-</Button>
                    <Typography>{quantity}</Typography>
                    <Button type="button" size="small">+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary">Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartProduct
