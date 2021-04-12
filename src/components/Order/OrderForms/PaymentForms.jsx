import React from 'react'
import { Typography, List, ListItem, ListItemText, Button, Divider } from '@material-ui/core'
import { useStateValue } from '../../../StateContext';
import { getBasketTotal } from '../../../reducer';

const PaymentForms = ({ deliveryData, backStep, nextStep }) => {
    console.log(deliveryData)
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket)
    return (
        <>
            <Typography variant="h6" gutterBottom>Your Order Summary</Typography>
            <List disablePadding>
                {basket.map((product) => (
                    <ListItem style={{padding: '10px 0'}} key={product.title}>
                        <ListItemText primary={product.title} secondary={`Quantity: ${product.quantity}`} />
                        <Typography variant="body2">₦{product.price}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{padding: '10px 0'}}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" style={{fontWeight: 700}}>
                        ₦{getBasketTotal(basket).toLocaleString('en')}
                    </Typography>
                </ListItem>
            </List>
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0'}}>Payment Method</Typography>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" onClick={backStep}>Back</Button>
                <Button type="submit" onClick={nextStep} variant="contained" color="primary">
                    Pay ₦{getBasketTotal(basket).toLocaleString('en')}
                </Button>
            </div>
       </>
    )
}

export default PaymentForms
