import React,{Fragment} from 'react'

export default props => (
    <Fragment>
        <label htmlFor={props.name}>{props.label}</label>
        <input {...props.input} placeholder={props.placeholder} type={props.type}/>
    </Fragment>
)