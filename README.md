<div align="center"><h1>📣 React Hook Form vs Formik</h1>

## 1. Easy to use

React Hook Form is really easy to use. Also It takes a small amount of code.

## 2. Super Light

React Hook Form is definitely a tiny library. Hence The package size matters for React Hook Form. React Hook Form use uncontrolled form input components and doesn’t have any dependencies, which makes the library much smaller (5kb gzip).

## 3. Perfomance

The form has a great performance because it uses uncontrolled components, so you don’t need to have onChange and set value. Hence, you can easily access its ref and avoid re-render(important). If you take a look it, you will wonder how many component re-renders have been triggered by the user.

## With Formik

    yarn add formik yup

```jsx
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
```

## With React Hook Form

    yarn add react-hook-form

```jsx
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
```

## Important Note

    I used Formik and then migrated to react-hook-form because Formik is very slow with large forms. I found couple bugs in react-hook-forms which were fixed over the time. Unfortunately during development I realised that I cannot use react-hook-forms in some complex forms because there are some missing features (ie. arrays of arrays, dependencies between fields, not that good support of typescript ...). I would recommend you to use react-hook-forms if you need large and simple forms, otherwise use Formik.
