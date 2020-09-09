import React,{useState} from 'react'
import {Formik, Form, Field, ErrorMessage, FieldArray, FastField} from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: '' , //name attribute of input field
    email: '' ,
    channel: '',
    comments: '',
    social: {
        facebook: '',
        twitter: ''
    },
    // phoneNumbers: ['',''],
    phNumbers: ['']
}

const savedValues = {
    name: 'Yash' , //name attribute of input field
    email: 'y@gmail.com' ,
    channel: 'yash',
    comments: '',
    social: {
        facebook: '',
        twitter: ''
    },
    // phoneNumbers: ['',''],
    phNumbers: ['']
}

const onSubmit = values => {
    console.log('values:', values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid Format!').required('Required!'),
    channel: Yup.string().required('Required!')
})

function YouTubeForm() {    

    const [formValues, setUpdatedValues] = useState(null)
    return (

        <Formik 
            initialValues = {formValues || initialValues}
            onSubmit = {onSubmit}
            validationSchema = {validationSchema}
            enableReinitialize
            // validateOnChange={false}
            // validateOnBlur={false}
            >
                {
                    formik => {
                    return(
                <Form>
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <Field type="text" id="name" name="name"/>                     
                        <ErrorMessage name="name">
                            {
                                errorMsgs => <div className="error">{errorMsgs}</div>
                            }
                        </ErrorMessage>  
                    </div>
                    
                    <div className="form-control">
                        <label htmlFor="email">E-Mail</label>
                        <Field type="text" id="email" name="email"/>
                        <ErrorMessage name="email"/>  
                    </div>
                    
                    <div className="form-control">
                        <label htmlFor="channel">Channel</label>
                        <FastField type="text" id="channel" name="channel"/>
                        <ErrorMessage name="channel"/>  
                    </div>
                    
                    <div>
                        <label htmlFor="comments">Comments</label>
                        <Field as ='textarea' id="comments" name="comments"/>
                    </div>

                    <div>
                        <label htmlFor="facebook">Facebook</label>
                        <Field type ='text' id="facebook" name="social.facebook"/>
                    </div>
                    
                    <div>
                        <label htmlFor="comments">Twitter</label>
                        <Field type ='text' id="twitter" name="social.twitter"/>
                    </div>

                    <div>
                        <label htmlFor="primaryPh">Primary Phone No</label>
                        <Field type ='text' id="primaryPh" name="phoneNumbers[0]"/>
                    </div>
                    
                    <div>
                        <label htmlFor="secondatyPh">Secondary Phone No</label>
                        <Field type ='text' id="secondatyPh" name="phoneNumbers[1]"/>
                    </div>

                    <div className="form-control">
                        <label>List of Phone No</label>
                        <FieldArray name='phNumbers'>
                            {
                                xyz => {
                                    const {push, remove, form} = xyz
                                    const {values} = form
                                    const {phNumbers} = values

                                return (
                                    <div>
                                        {
                                            phNumbers.map((phNumber,index) => (
                                                <div key={index}>
                                                    <Field name={`phNumbers[${index}]`}/>
                                                    {
                                                        index > 0 && (
                                                            <button type="button" onClick={() => remove(index)}>
                                                                {' '}
                                                                - {' '}
                                                            </button>
                                                        )
                                                    }
                                                    <button type="button" onClick={() => push(index)}>
                                                                {' '}
                                                                + {' '}
                                                    </button>
                                                </div>
                                                ))
                                        }
                                    </div>
                                )    
                                }
                            }
                        </FieldArray>
                    </div>

                    <button type="button" onChange={() => setUpdatedValues(savedValues)} >Update</button>
                    <button type="reset"> Reset </button>
                    <button type="submit" disabled={!formik.isValid}>Submit</button>
                </Form>
                    )}
            }
        </Formik>
    )
}

export default YouTubeForm
