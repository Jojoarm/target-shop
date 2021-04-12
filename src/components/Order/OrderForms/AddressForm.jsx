import React from 'react'
//We will be using react hook form to manage our address page
import { useForm, FormProvider } from 'react-hook-form'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import FormInput from './CustomTextField'
import { Link } from 'react-router-dom'


const AddressForm = ({ next }) => {
    const methods = useForm()

    return (
        <>
            <Typography variant="h6" gutterButtom>Delivery Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => next({ ...data }))}>
                    <Grid container spacing={3}>
                        {/* We have to connect our material ui with react hook form. It's on the react-hook-form documentation */}
                        <FormInput required name="firstName" label="First name" />
                        <FormInput required name="lastName" label="Last name" />
                        <FormInput required name="address" label="Address" />
                        <FormInput required name="email" label="Email" />
                        <FormInput required name="tel" label="Phone Number" />
                        <FormInput required name="city" label="City" />
                        <FormInput required name="country" label="Country" />
                        <FormInput name="zip" label="Zip / Postal code" />
                    </Grid>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/cart' >
                            <Button variant="outlined" to="/cart">Back to Cart</Button>
                        </Link>
                        <Button type="submit" variant="contained" color="primary">Next</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
