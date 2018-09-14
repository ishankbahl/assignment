import React from 'react';

export default function FileUpload(props) {
    return (
        <input type="file" ref={props.refProp} />
    );
}