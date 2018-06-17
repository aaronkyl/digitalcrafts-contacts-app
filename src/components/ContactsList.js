import React from 'react';

function TableHeader () {
    return (
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Address</td>
                <td>City</td>
                <td>State</td>
                <td>Zip</td>
            </tr>
        </thead>
    );
}

function Contact (contact) {
    return (
        <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>{contact.address}</td>
            <td>{contact.city}</td>
            <td>{contact.state}</td>
            <td>{contact.zip}</td>
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