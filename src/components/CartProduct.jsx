import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'
import './CartProduct.css'
import { useStateValue } from '../StateContext';

const CartProduct = ({ id, name, quantity, image, price }) => {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    const increaseItemQuantity = () => {
        dispatch ({
            type: 'INCREASE_PRODUCT_QUANTITY',
            id: id,
        })
    }

    const decreaseItemQuantity = () => {
        dispatch ({
            type: 'DECREASE_PRODUCT_QUANTITY',
            id: id,
        })
    }

    return (
        <Card style={{maxWidth: '350px', height: '450px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <CardMedia image={image} alt={name} className="cart__media" />
            <CardContent className="cart__content">
                <Typography variant="body1">{name}</Typography>
                <Typography variant="h5">₦{price}</Typography>
            </CardContent>
            <CardActions className="cart__actions">
                <div className="cart__buttons">
                    <button className="update__button" onClick={decreaseItemQuantity} type="button" size="small">-</button>
                    <h3>{quantity}</h3>
                    <button className="update__button" onClick={increaseItemQuantity} type="button" size="small">+</button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={removeFromBasket}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartProduct
