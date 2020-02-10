import React from 'react'
import { findByLabelText } from '@testing-library/react'

const itemStyle = {
    marginRight: '60px',
    fontSize: '20px',
    fontFamily: 'sans-serif'
}

export default function NavItem(props) {
    return (
        <div style={props.customStyle ? props.customStyle : itemStyle}>
            <li>
            <a href={props.link}>{props.children}</a>
            </li>
        </div>
    )
}
