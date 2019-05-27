import React, {Component} from 'react'

class Contact extends Component {
    state = {
        showContactInfo: false
    }

onShowClick = () => {
    this.setState({
        showContactInfo: !this.state.showContactInfo
    })
}

  render(){
    const {name, email, phone} = this.props.contact;

      return (
          <div className="card card-body mb-3">
              <h4>{name} 
                <i 
              onClick={this.onShowClick} 
              className="fas fa-sort-down" 
                      style={{ cursor: 'pointer' }}
              /> 
              <i 
              className="fas fa-times"
              style={{cursor: 'pointer', float: 'right', color:'red'}}
              />
              </h4>
              {this.state.showContactInfo ? (
                  <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
              </ul>
              ) : null}
          </div>
      )
  }
}

export default Contact

