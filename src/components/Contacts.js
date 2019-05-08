import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
    constructor(){
        super();
        this.state = {
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
        }
    }
  render() {
      const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
            <Contact 
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            />
        ))}
        
      </div>
    )
  }
}

export default Contacts