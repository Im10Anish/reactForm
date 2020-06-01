import React from 'react'
import FormikForm from './components/formik'
import ReactHookForm from './components/reactHookForm'

import './App.css'

function App() {
    return (
        <div className="App">
            <div style={{ marginTop: '50px' }} />
            <div>Formik</div>
            <FormikForm />
            <div style={{ marginTop: '50px' }} />
            <div>React Hook Form</div>
            <ReactHookForm />
        </div>
    )
}

export default App
