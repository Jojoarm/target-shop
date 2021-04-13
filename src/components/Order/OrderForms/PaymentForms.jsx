import React, { useState } from 'react'
import { Typography, List, ListItem, ListItemText, Button, Divider, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import { useStateValue } from '../../../StateContext';
import { getBasketTotal } from '../../../reducer';

const PaymentForms = ({ deliveryData, backStep, nextStep }) => {
    console.log(deliveryData)
    const [{ basket }, dispatch] = useStateValue();
    const [value, setValue] = useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    console.log('value', value)
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
                        ₦{getBasketTotal(basket).toLocaleString('en')}.00
                    </Typography>
                </ListItem>
            </List>
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0'}}>Payment Method</Typography>
            <FormControl component="fieldset">
                <FormLabel component="legend">Select Payment Method</FormLabel>
                <RadioGroup aria-label="payment" name="payment1" value={value} onChange={handleChange}>
                    <FormControlLabel value="Cash on delivery" control={<Radio />} label="Cash on delivery" />
                    <FormControlLabel value="Transfer" control={<Radio />} label="Transfer" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
            <Divider />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" onClick={backStep}>Back</Button>
                <Button type="submit" onClick={nextStep} disabled={!value} variant="contained" color="primary">
                    Pay ₦{getBasketTotal(basket).toLocaleString('en')}.00
                </Button>
            </div>
       </>
    )
}

export default PaymentForms
