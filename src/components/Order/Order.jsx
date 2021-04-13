import React, { useState} from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import useStyles from './styles'
import Login from './OrderForms/Login'
import AddressForm from './OrderForms/AddressForm'
import PaymentForms from './OrderForms/PaymentForms'
import successImage from '../../assets/success.png'
import deliveryImage from '../../assets/delivery.png'
import { Link } from 'react-router-dom'

const steps = ['Account', 'Delivery address', 'Payment']

const Order = () => {
    //For styling material ui
    const classes = useStyles();
    //Create a state to determine our stages movement in the page
    const [activeStep, setActiveStep] = useState(0);
    //Create a state to hold the delivery information 
    const [deliveryData, setDeliveryData] = useState({})

    //function to move to different stages
    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

    const next = (data) => {
        setDeliveryData(data);
        nextStep()
    }

    //Confirmation component
    const Confirmation = () => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
            <img src={successImage} alt="success image" className="smiley" />
            <Typography variant='h6' align="center"> Thank You! </Typography>
            <Typography variant='h6' align="center"> Your order has been placed successfully </Typography>
            <Typography variant='body1' align="center">
                You will receive a confirmation message when your order is accepted and deliver underway
            </Typography>
            <img src={deliveryImage} alt="delivery image" className="smiley" />
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/' >
                <Button type="submit" variant="contained" color="primary"> Continue Shopping </Button>
            </Link>
            
        </div>
    )

    //To determine what to display depending on the step we are on
    const Form = () => { switch (activeStep){
        case 0:
            return <Login nextStep={nextStep} />
        case 1:
            return <AddressForm next={next} />
        case 2:
            return <PaymentForms deliveryData={deliveryData} backStep={backStep} nextStep={nextStep} />
    }
    // activeStep === 1 ? <AddressForm /> : <PaymentForms />
    }

    return (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' align="center">Order</Typography>
                    {/* The stepper component will allow you move through stages */}
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step)=> (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {/* if we are on the last step, we show this */}
                    {activeStep === steps.length ? <Confirmation /> : <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Order
