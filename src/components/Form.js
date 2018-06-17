import React, { Component } from 'react';
import TextInput from './Inputs.js';
// import AddButton from './Buttons.js';

function AddButton (props) {
    return (
        <button type={props.type} onClick={props.addContact}>{props.text}</button>
    );
}

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        };
    }
    
    updateState(event, key) {
        this.setState({[key]: event.target.value});
    }
    
    addContact() {
        this.props.addContact(this.state);
    }
    
    render(props) {
        
        const handleAddContact = this.addContact.bind(this);
        return (
            <div>
                <TextInput type="text" name="name" placeholder="Name" onChange={e=>this.updateState(e, 'name')} value={this.state.name} />
                <TextInput type="email" name="email" placeholder="Email" onChange={e=>this.updateState(e, 'email')} value={this.state.email} />
                <TextInput type="text" name="phone" placeholder="Phone" onChange={e=>this.updateState(e, 'phone')} value={this.state.phone} />
                <TextInput type="text" name="address" placeholder="Address" onChange={e=>this.updateState(e, 'address')} value={this.state.address} />
                <TextInput type="text" name="city" placeholder="City" onChange={e=>this.updateState(e, 'city')} value={this.state.city} />
                <TextInput type="text" name="state" placeholder="State" onChange={e=>this.updateState(e, 'state')} value={this.state.state} />
                <TextInput type="number" name="zip" placeholder="Zip" onChange={e=>this.updateState(e, 'zip')} value={this.state.zip} />
                <AddButton type="button" text="Add Contact" addContact={handleAddContact}/>
            </div>
        );
    }
}

export default Form;