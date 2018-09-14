import React from 'react';

export default function Radio(props) {

    return (
        <input 
            type="radio"
            name={props.name}
            value={props.value}
            checked={props.selectedOption === props.value} 
            onChange={(event) => props.handleChange(event)}
        />
    );

}