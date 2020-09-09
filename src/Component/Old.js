import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: '' , //name attribute of input field
    email: '' ,
    channel: ''
}

const onSubmit = values => {
    console.log('values:', values)
}

// const validate = values => {
//     let errors = {}
//             if (!values.name)
//             {
//                 errors.name = 'Required'
//             }
//             if (!values.email)
//             {
//                 errors.email = 'Required'
//             }
//             if (!values.channel)
//             {
//                 errors.channel = 'Required'
//             }
//             return errors
// }

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid Format!').required('Required!'),
    channel: Yup.string().required('Required!')
})

function Old() {

    const formik = useFormik({
        initialValues, 
        onSubmit,
        validationSchema 
        // validate           
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        onChange={formik.handleChange} 
                        value={formik.values.name}
                        onBlur={formik.handleBlur}/>
                    {
                        formik.touched.name && formik.errors.name ? 
                            <div className="error">{formik.errors.name}</div> : 
                            null
                    }    
                </div>
                <div className="form-control">
                    <label htmlFor="email">E-Mail</label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        onChange={formik.handleChange} 
                        value={formik.values.email}
                        onBlur={formik.handleBlur}/>
                        {
                            formik.touched.email && formik.errors.email ? 
                                <div className="error">{formik.errors.email}</div> : 
                                null
                        }
                </div>
                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input 
                        type="text" 
                        id="channel" 
                        name="channel" 
                        onChange={formik.handleChange} 
                        value={formik.values.channel}
                        onBlur={formik.handleBlur}/>
                        {
                        formik.touched.channel && formik.errors.channel ? 

                            <div className="error">{formik.errors.channel}</div> : 
                            null
                        }
                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default YouTubeForm
