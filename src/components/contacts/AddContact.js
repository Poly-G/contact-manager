import React, { Component } from 'react'
import { Consumer } from '../../context';
import uuid from 'uuid';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    onSubmit = (dispatch,e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;

        const newContact = {
            id: uuid(),
            name, 
            email, 
            phone
        };

        dispatch({type: 'ADD_CONTACT', payload: newContact})
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { name, email, phone } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='card mb-3'>
                            <div className="card-header">Add Contact
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    {/* Name input */}
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control form-control-lg"
                                            placeholder="Enter Name..."
                                            value={name}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    {/* Email input */}
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control form-control-lg"
                                            placeholder="Enter email..."
                                            value={email}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    {/* Phone number input */}
                                    <div className="form-group">
                                        <label htmlFor="Phone Number...">Phone Number</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            className="form-control form-control-lg"
                                            placeholder="Enter Phone Number"
                                            value={phone}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    {/* Submit input */}
                                    <input
                                        type="submit"
                                        value="Add Contact"
                                        className="btn btn-light btn-block"
                                    />
                                </form>
                            </div>

                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;
