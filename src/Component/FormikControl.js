import React from 'react'
import Input from './Input'
import TextArea from './TextArea'
import Select from './Select'
import RadioButton from './RadioButton'
import SelectGroupBox from './SelectGroupBox'
import DatePicker from './DatePicker'

function FormikControl(props) {

    const {control, ...rest} = props

    switch(control) {
        case 'input' :
            return <Input {...rest}/>
        case 'textarea' :
            return <TextArea {...rest}/>
        case 'select' :
            return <Select {...rest}/>
        case 'radio' :
            return <RadioButton {...rest}/>
        case 'checkbox' :
            return <SelectGroupBox {...rest}/>
        case 'date' :
            return <DatePicker {...rest}/>
        default: return null
    }

    return (
        <div>
            
        </div>
    )
}

export default FormikControl
