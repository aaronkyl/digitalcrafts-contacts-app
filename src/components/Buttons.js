import React, { Component } from 'react';

function AddButton (props) {
    return (
        <button type={props.type} onClick={props.clicked}>{props.text}</button>
    );
}

export default AddButton;