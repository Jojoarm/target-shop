import React, { useState} from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import useStyles from './styles'
import Login from './OrderForms/Login'
import AddressForm from './OrderForms/AddressForm'
import PaymentForms from './OrderForms/PaymentForms'

const steps = ['Account', 'Delivery address', 'Payment']

const Order = () => {
    //For styling material ui
    const classes = useStyles();
    //Create a state to determine our stages movement in the page
    const [activeStep, setActiveStep] = useState(1);
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
        <div>
            Confirmation page boom
        </div>
    )

    //To determine what to display depending on the step we are on
    const Form = () => { switch (activeStep){
        case 0:
            return <Login />
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
