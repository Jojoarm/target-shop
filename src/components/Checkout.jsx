import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CartProduct from './CartProduct'
import { useStateValue } from '../StateContext'
import { getBasketTotal } from '../reducer';
import sadSmiley from '../assets/sadface.png'
import './Checkout.css'


const Checkout = () => {
    const [{basket, user}, dispatch] = useStateValue();

    //Function to empty the Cart completely
    const emptyCart = () => {
        dispatch ({
            type: 'EMPTY_CART',
            
        })
    }


    const isEmpty = !basket?.length;  //If the basket length is more than 0 it's not empty

    // If the basket is empty we will display this
    const EmptyCart = () => (
        <div className="empty__cart">
            <div className="empty__icon">
                <img className="smiley" src={sadSmiley} alt="sad smiley" />
            </div>
            <Typography className="empty__message" variant="subtitle1">
                Opps, you have no item in your shopping cart,
                <Link to="/" style={{ color: 'black' }}>Start adding some items here!</Link>
            </Typography>
        </div>
    )

    // console.log(getBasketTotal(basket))

    // if the basket contains items we will display this
    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {basket?.map((item) => (
                <Grid item x2={12} sm={4} key={item.id}>
                   <CartProduct id={item.id} quantity={item.quantity} name={item.title} image={item.image} price={item.price} />
                </Grid>
            ))}
        </Grid>
        <div className="card__details">
            <Typography variant="h5">
                Subtotal: ₦{getBasketTotal(basket).toLocaleString('en')}
            </Typography>
            <div className="buttons">
                <Button onClick={emptyCart} className="empty__button" size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                <Link style={{ textDecoration: 'none'}} to="/order" >
                    <Button className="checkout__button" size="large" type="button" variant="contained" color="primary">Place Order</Button>
                </Link>
            </div>
        </div>
        </>
    )
    
    return (
        <Container>
            <div className="toolbar" />
            <Typography className="cart__title" variant="h4" gutterBottom>Your Shopping Basket</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )

}

export default Checkout