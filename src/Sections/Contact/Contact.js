import React from 'react'

const Contact = () => (
  <form name="contact" netlify>
    <label>
      Name
      <input type="text" name="name" />
    </label>
    <label>
      E-mail
      <input type="email" name="email" />
    </label>
    <label>
      Message
      <input type="text" name="message" />
    </label>
    <button type="submit">Send</button>
  </form>
)

export default Contact
