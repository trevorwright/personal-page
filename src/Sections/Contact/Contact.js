import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const ContactContainerStyled = styled.div`
  max-width: 500px;
  margin: 0 auto;
`

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`

const inputStyles = css`
  padding: 8px 12px;
  font-size: 1.3em;
  border: 1px solid #1976d2;
  border-radius: 5px;
  background: #ffffff;

  ::placeholder {
    color: #bdbdbd;
    opacity: 1; /* Firefox */
  }
`

const InputStyled = styled.input`
  ${inputStyles};

  :not(:last-child) {
    margin-bottom: 12px;
  }
`

const TextAreaStyled = styled.textarea`
  ${inputStyles};
`

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
    error: false,
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // eslint-disable-next-line
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': event.target.getAttribute('name'), ...this.state }),
    })
      .then(({ status }) => {
        if (status !== 200) {
          throw new Error('Non 200 returned')
        }

        this.setState({
          name: '',
          email: '',
          message: '',
          submitted: true,
        })
      })
      .catch(() => console.error('An error occured'))
  }

  handleFieldChange = event => this.setState({ [event.target.name]: event.target.value })

  // TODO: Implement a success state
  renderSuccess() {
    return <h1>Submission successful</h1>
  }

  // TODO: Implement an error state
  renderError() {
    return <h1>An error occured</h1>
  }

  render() {
    const {
      name, email, message, submitted, error,
    } = this.state

    if (error) return this.renderError()

    if (submitted) return <h1>Submitted successfully</h1>

    return (
      <ContactContainerStyled>
        <FormStyled
          name="contact"
          onSubmit={this.handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <InputStyled type="hidden" name="form-name" value="contact" />
          <InputStyled style={{ display: 'none' }} name="bot-field" onChange={this.handleChange} />
          <InputStyled
            type="text"
            name="name"
            value={name}
            onChange={this.handleFieldChange}
            placeholder="Name"
          />
          <InputStyled
            type="email"
            name="email"
            value={email}
            onChange={this.handleFieldChange}
            placeholder="E-mail"
          />
          <TextAreaStyled
            rows="5"
            name="message"
            value={message}
            onChange={this.handleFieldChange}
            placeholder="Message"
          />
          <button type="submit">Send</button>
        </FormStyled>
      </ContactContainerStyled>
    )
  }
}

export default Contact
