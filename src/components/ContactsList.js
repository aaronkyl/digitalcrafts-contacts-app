import React from 'react';

function TableHeader () {
    return (
        <thead>
            <tr>
                <td>Name</td>
                <td>City</td>
                <td>State</td>
            </tr>
        </thead>
    );
}

function Contact (contact) {
    return (
        <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.city}</td>
            <td>{contact.state}</td>
        </tr>
    );
}

function ContactsList (props) {
    const rows = props.contacts.map(Contact);
    
    return (
        <table>
            <TableHeader />
            <tbody>{ rows }</tbody>
        </table>
    );
}

export default ContactsList;