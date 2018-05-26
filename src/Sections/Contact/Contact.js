import React, { Component } from 'react'

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    submitted: false,
  }

  handleSubmit = (event) => {
    const { name, email, message } = this.state
    const fields = { name, email, message }
    // eslint-disable-next-line
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...fields }),
    }).then(() => {
      this.setState({
        name: '',
        email: '',
        message: '',
        submitted: true,
      }).catch(() => console.error('An error occured'))
    })

    event.preventDefault()
  }

  handleFieldChange = event => this.setState({ [event.target.name]: event.target.value })

  render() {
    const {
      name, email, message, submitted,
    } = this.state
    if (submitted) {
      return <h1>Submitted successfully</h1>
    }

    return (
      <form name="contact" onSubmit={this.handleSubmit} data-netlify="true">
        <label>
          Name
          <input type="text" name="name" value={name} onChange={this.handleFieldChange} />
        </label>
        <label>
          E-mail
          <input type="email" name="email" value={email} onChange={this.handleFieldChange} />
        </label>
        <label>
          Message
          <input type="text" name="message" value={message} onChange={this.handleFieldChange} />
        </label>
        <button type="submit">Send</button>
      </form>
    )
  }
}

export default Contact
