import React, { Component } from 'react';

function AddButton (props) {
    return (
        <button type={props.type} onClick={props.addContact}>{props.text}</button>
    );
}

export default AddButton;