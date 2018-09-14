import React from 'react';

export default function Checkbox(props) {
    return (
        <input 
            type="checkbox"
            name={props.name} 
            checked={props.isChecked} 
            onChange={(event) => props.handleChange(event)} 
        />
    );
}