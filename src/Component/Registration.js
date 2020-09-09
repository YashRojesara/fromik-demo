import React from 'react'
import {Form,Formik, validateYupSchema} from 'formik'
import * as Yup from 'yup'
import FormikContrpl from './FormikControl'

function Registration() {

    const options = [
        {key: 'Email', value: 'emailmoc'},
        {key: 'Telephone', value: 'telephonemoc'}
    ]

    const initialvalues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email().required('Required'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'),''], 'Password must match').required('Required'),
        modeOfContact: Yup.string().required('Required'),
        phone: Yup.string().when('modeOfContact', {
            is: 'telephonemoc',
            then: Yup.string().required('Required')
        })
    })

    const onSubmit = values => {
        console.log(`Values: ${values}`)
    }

    return (
        <Formik initialValues={initialvalues} validationSchema={validationSchema} onSubmit={onsubmit}>
            {
                formik => {
                    return <Form>
                        <FormikContrpl
                            control='input'
                            type='email'
                            label='Email'
                            name='email'
                        />
                        <FormikContrpl
                            control='input'
                            type='password'
                            label='Password'
                            name='password'
                        />
                        <FormikContrpl
                            control='input'
                            type='password'
                            label='Confirm Password'
                            name='confirmPassword'
                        />
                        <FormikContrpl
                            control='radio'
                            label='Mode Of Contact'
                            name='modeOfContact'
                            options={options}
                        />
                        <FormikContrpl
                            control='input'
                            type='text'
                            label='Phone No'
                            name='phone'
                        />

                        <button type='submit' disabled={!formik.isValid}>
                            Submit
                        </button>
                    </Form>
                }
            }
        </Formik>
    )
}

export default Registration
