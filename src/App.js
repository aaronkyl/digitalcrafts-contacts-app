import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form.js';
import ContactsList from './components/ContactsList.js';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      noOfContacts: 3,
      contacts: [
        {
          id: 1,
          name: "Aaron",
          email: "aaronwilkinson@gmail.com",
          phone: "123-456-7890",
          address: "123 Main St",
          city: "Houston",
          state: "TX",
          zip: 77009
        },
        {
          id: 2,
          name: "Mary",
          email: "marysue@gmail.com",
          phone: "555-728-5466",
          address: "555 First St",
          city: "Houston",
          state: "TX",
          zip: 77010
        },
        {
          id: 3,
          name: "Jonas",
          email: "jojo@gmail.com",
          phone: "982-462-7451",
          address: "803 Marcus Ct",
          city: "Katy",
          state: "TX",
          zip: 77015
        }
      ]
    };
  }
  
  addContact(contactDetails) {
    let newContactsArray = this.state.contacts.slice();
    let newContact = {
      id: this.state.noOfContacts,
      name: 'testname', //contactDetails.name,
      email: 'testemail', //contactDetails.email,
      phone: 'testphone', //contactDetails.phone,
      address: 'testaddress', //contactDetails.address,
      city: 'testcity', //contactDetails.city,
      state: 'teststate', //contactDetails.state,
      zip: 'testzip' //contactDetails.zip
    };
    newContactsArray.push(newContact);
    this.setState({
      contacts: newContactsArray,
      noOfContacts: newContactsArray.length
    });
  }
  
  render() {
    
    const handleAddContact = this.addContact.bind(this);
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Form addContact={handleAddContact}/>
        <ContactsList contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
