import React from 'react'
import {Field, ErrorMessage} from 'formik'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import TextError from './TextError'

function DatePicker(props) {

    const {label,name,...rest} = props

    return (
        <div className='form-control'> 
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({form, field}) => {

                        console.log(`FORM ${form}`);
                        const {setFieldValue} = form
                        const { value } = field

                        return (
                            <DateView
                                id={name}
                                {...field}
                                {...rest}
                                selected={value}
                                onChange={val => setFieldValue(name, val)}
                            />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default DatePicker
