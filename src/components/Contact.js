import React from 'react'

const Contact = props => {
  return (
      <div className="card card-body mb-3">
          <h4>{props.name}</h4>
          <ul className="list-group">
              <li className="list-group-item">Email: {props.email}</li>
              <li className="list-group-item">Phone: {props.phone}</li>
          </ul>
      </div>
  )
}

export default Contact

