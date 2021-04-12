import React from 'react'
import { TextField, Grid } from '@material-ui/core'
import {  Controller, useFormContext } from 'react-hook-form'


const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext();
    
    return (
        <Grid item xs={12} sm={6}>
            <Controller 
                name={name} 
                label={label}
                control = {control}
                fullwidth = {true}
                render={() => <TextField name={name} label={label} required />}
            />
        </Grid>
    )
}

export default FormInput
