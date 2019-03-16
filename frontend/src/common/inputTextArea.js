import React,{Fragment} from 'react'

export default props => (
    <Fragment>
        <label htmlFor={props.name}>{props.label}</label>
        <textarea {...props.input} class="WYSIWYG" cols="40" rows="3" spellcheck="true"></textarea>
    </Fragment>
)