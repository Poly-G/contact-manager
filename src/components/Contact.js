import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="card card-body mb-3">
        <h4>John Doe</h4>
        <ul className="list-group">
            <li className="list-group-item">Email: jdoe@gmail.com</li>
            <li className="list-group-item">Phone: 555-555-5555</li>
        </ul>
      </div>
    )
  }
}
