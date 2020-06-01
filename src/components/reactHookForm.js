import React from 'react'
import { useForm, ErrorMessage } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const ReactHookForm = () => {
    const { register, handleSubmit, errors, control } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                name="firstName"
                control={control}
                error={errors.firstName}
                inputRef={register({ required: 'Please Enter firstName' })}
                helperText={<ErrorMessage name="firstName" errors={errors} />}
            />
            <div />
            <TextField
                name="lastName"
                control={control}
                error={errors.lastName}
                inputRef={register({ required: 'Please Enter lastName' })}
                helperText={<ErrorMessage name="lastName" errors={errors} />}
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
    )
}

export default ReactHookForm
