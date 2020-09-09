import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function TextArea(props) {

    const {name, label, ...rest} = props
    return (
        <div className="form-control">
            <label>{label}</label>
            <Field as='textarea' name={name} id={name} {...rest}/>
            <ErrorMessage name={name} component={TextError}></ErrorMessage>
        </div>
    )
}

export default TextArea
