import React from 'react'

export default props => (
    <nav id="breadcrumbs">
        <ul>
            {props.itens.map(item=>(
                <li><a href={item.link}>{item.text}</a></li>
            ))}
            <li>{props.current}</li>
        </ul>
    </nav>
)

