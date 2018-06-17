import React from 'react';

function TextInput (props) {
    return (
        <input 
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        />
    );
}

export default TextInput;