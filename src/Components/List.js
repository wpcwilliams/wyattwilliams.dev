import React from 'react'

/* Unordered List Component
props:
    items - array[] of strings with each element mapping to an <li>
    class - css className 
*/

export default function List(props) {
    let listItems = props.items.map((item, index) => <li key={index}>{item}</li>); 
    
    return (
        <ul className={props.class}>
            {listItems}
        </ul>
    )
}
