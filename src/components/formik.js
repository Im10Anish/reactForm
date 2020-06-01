import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const validationSchema = Yup.object({
    firstName: Yup.string().required('Please Enter firstName'),
    lastName: Yup.string().required('Please Enter lastName'),
})

const FormikForm = () => {
    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
        },
        validationSchema,
        onSubmit(values) {
            console.log('+++values+++', values)
        },
    })
    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete="off">
                <TextField
                    name="firstName"
                    onChange={handleChange}
                    values={values.firstName}
                    error={errors.firstName}
                    helperText={errors.firstName ? errors.firstName : null}
                />
                <div />
                <TextField
                    name="lastName"
                    onChange={handleChange}
                    values={values.lastName}
                    error={errors.lastName}
                    helperText={errors.lastName ? errors.lastName : null}
                />
                <div />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginTop: '10px' }}
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default FormikForm
