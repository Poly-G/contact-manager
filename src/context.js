import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                    )
            };
        default:
            return state;
    }
};

export default class Provider extends Component {
    state = {
        contacts: [
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
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    };

    render() {
        return (
            <div>
                <Context.Provider value={this.state}>
                    {this.props.children}
                </Context.Provider> 
            </div>
        )
    }
}

export const Consumer = Context.Consumer
