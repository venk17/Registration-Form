// src/components/RegistrationForm/index.js

import React, {useState} from 'react'
import './index.css'

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFirstNameChange = event => {
    setFirstName(event.target.value)
    setFirstNameError('')
  }

  const handleLastNameChange = event => {
    setLastName(event.target.value)
    setLastNameError('')
  }

  const handleBlurFirstName = () => {
    if (firstName === '') {
      setFirstNameError('Required')
    }
  }

  const handleBlurLastName = () => {
    if (lastName === '') {
      setLastNameError('Required')
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    let hasError = false

    if (firstName === '' && lastName === '') {
      setFirstNameError('Required')
      setLastNameError('Required')
      hasError = true
    } else if (firstName === '') {
      setFirstNameError('Required')
      hasError = true
    } else if (lastName === '') {
      setLastNameError('Required')
      hasError = true
    }

    if (!hasError) {
      setIsSubmitted(true)
    }
  }

  const handleSubmitAnotherResponse = () => {
    setIsSubmitted(false)
    setFirstName('')
    setLastName('')
    setFirstNameError('')
    setLastNameError('')
  }

  return (
    <div className="registration-form-container">
      <h1>Registration</h1>
      {isSubmitted ? (
        <div className="success-message">
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            alt="success"
          />
          <p>Submitted Successfully</p>
          <button type="button" onClick={handleSubmitAnotherResponse}>
            Submit Another Response
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="firstName">FIRST NAME</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              onBlur={handleBlurFirstName}
            />
            {firstNameError && (
              <p className="error-message">{firstNameError}</p>
            )}
          </div>
          <div className="input-container">
            <label htmlFor="lastName">LAST NAME</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              onBlur={handleBlurLastName}
            />
            {lastNameError && <p className="error-message">{lastNameError}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  )
}

export default RegistrationForm
