import React, { Component } from 'react'

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }


    render() {
        return (
            <div className='card mb-3'>
                <div className="card-header">Add Contact

                </div>
                <div className="card-body">
                    <form>
                        {/* Name input */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                            type="text" 
                            name="name"
                            className="form-control form-control-lg"
                            placeholder="Enter Name..."
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
                            />
                        </div>
                        {/* Phone number input */}
                        <div className="form-group">
                            <label htmlFor="Phone Number...">Phone Number</label>
                            <input
                            type="number"
                            name="phone"
                            className="form-control form-control-lg"
                            placeholder="Enter Phone Number"
                            />
                        </div>
                        <input 
                        type="submit"
                        value="Add Contact"
                        className="btn btn-light btn-block"
                        />
                    </form>
                </div>
                
            </div>
        )
    }
}

export default AddContact;
