import React from 'react'

function FormContact() {
  const handleClick = (e) => {
    e.preventDefault()
    alert("gönderildi")
  }
  return (
    <form>
      <label>Name</label>
      <input type='text' />
      <label>Email</label>
      <input type='email' />
      <label>Message</label>
      <textarea type='text' />
      <button onClick={(e) => handleClick(e)}>Gönder</button>
    </form>
  )
}

export default FormContact
