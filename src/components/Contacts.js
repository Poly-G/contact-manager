import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
  state = {
            contacts : [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'jdoe@gmail.com',
                    phone: '555-555-5555'
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                    email: 'Jane@gmail.com',
                    phone: '333-333-3333'
                },
                {
                    id: 3,
                    name: 'Poly Goveia',
                    email: 'poly@gmail.com',
                    phone: '111-111-1111'
                }
            ]
        };

  deleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact =>
      contact.id !== id)

    this.setState({
      contacts: newContacts
    })
  }

  render() {
      const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
            <Contact 
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
            />
        ))}
        
      </div>
    )
  }
}

export default Contacts
