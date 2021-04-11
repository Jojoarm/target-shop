import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CartProduct from './CartProduct'
import { useStateValue } from '../StateContext'

const Checkout = () => {
    const [{basket, user}, dispatch] = useStateValue();

    const isEmpty = !basket?.length;  //If the basket length is more than 0 it's not empty

    // If the basket is empty we will display this
    const EmptyCart = () => (
        <Typography variant="subtitle1">
            Opps, ou have no item in your shopping cart, start adding some!
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}> Start adding some items </Link>!
        </Typography>
    )

    // if the basket contains items we will display this
    const FilledCart = () => (
        <>
        <div className="cart__container">
            {basket?.map((item) => (
                <Grid item x2={12} sm={4} key={item.id}>
                   <CartProduct id={item.id} quantity={item.quantity} name={item.title} image={item.image} price={item.price} />
                </Grid>
            ))}
        </div>
        <div className="card__details">
            <Typography variant="h4">
                Subtotal:
            </Typography>
            <div>
                <Button className="empty__button" size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                <Button component={Link} to="/checkout" className="checkout__button" size="large" type="button" variant="contained" color="primary">Checkout</Button>
            </div>
        </div>
        </>
    )
    // if(!cart.line_items) return 'Loading...'

    return (
        <Container>
            <div className="toolbar" />
            <Typography className="cart__title" variant="h3" gutterBottom>Your Shopping Basket</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )

}

export default Checkout