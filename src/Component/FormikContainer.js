import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const dropDownOptions = [
    {key: 'Select One Option', value: ''},
    {key: 'Option 1', value: 'Option1'},
    {key: 'Option 2', value: 'Option2'},
    {key: 'Option 3', value: 'Option3'},
]

const radioOptions = [
    {key: 'Option 1', value: 'rOption1'},
    {key: 'Option 2', value: 'rOption2'},
    {key: 'Option 3', value: 'rOption3'},
]

const checkBoxOptions = [
    {key: 'Option 1', value: 'chkOption1'},
    {key: 'Option 2', value: 'chkOption2'},
    {key: 'Option 3', value: 'chkOption3'},
]

function FormikContainer() {

    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkBoxOption: [],
        birthDate: null
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Required!'),
        description: Yup.string().required('Required!'),
        selectOption: Yup.string().required('Required!'),
        radioOption: Yup.string().required('Required!'),
        checkBoxOption: Yup.array().required('Required'),
        birthDate: Yup.date().required('Required').nullable()
    })
    const onSubmit = values => console.log(values)

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {
                formik => (
                    <Form>
                        <FormikControl control='input' type='email' label='Email' name='email' ></FormikControl>
                        <FormikControl control='textarea' label='Description' name='description'/>
                        <FormikControl control='textarea' label='Description' name='description'/>
                        <FormikControl control='select' label='Select a Topic' 
                                        name='selectoption' options={dropDownOptions}/>
                        <FormikControl control='radio' label='Radio Topic' 
                                        name='radioOption' options={radioOptions}/>
                        <FormikControl control='checkbox' label='CheckBox Topics' 
                                        name='checkBoxOption' options={checkBoxOptions}/>
                        <FormikControl control='date' label='Pick a Date' 
                                        name='birthDate'/>

                        <button type="submit"> Submit </button>
                    </Form>
                )                
            }
        </Formik>
    )
}

export default FormikContainer
