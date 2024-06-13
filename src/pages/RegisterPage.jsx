import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Container, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Input from '../components/InputComponent'
import Button from '../components/ButtonComponent'
import Hyperlink from '../components/Hyperlink'
import AvatarInput from '../components/AvatarInput'
import '../styles/Register.css'

const RegisterPage = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_API_ENDPOINT

  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: null,
  })

  // State for form submission status
  const [submitting, setSubmitting] = useState(false)

  // State for displaying the image
  const [imageURL, setImageURL] = useState(null)

  const navigateTo = useNavigate()

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleAvatarChange = (event) => {
    const selectedFile = event.target.files[0]

    // Store the file object in formData
    setFormData({
      ...formData,
      image: selectedFile,
    })

    // Create a URL for the selected file and store it in imageURL
    setImageURL(URL.createObjectURL(selectedFile))
  }

  const navigateToRegisterFunction = () => {
    navigateTo('/login')
  }

  const clearFormData = async () => {
    await setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      image: null,
    })
    window.location.reload() // Reload the page
  }
  const submitForm = async (event) => {
    event.preventDefault()
    try {
      setSubmitting(true) // Start form submission

      const formDataToSend = new FormData()
      for (const key in formData) {
        formDataToSend.append(key, formData[key])
      }

      const result = await axios.post(
        `${baseUrl}/user/register`,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )

      if (result.status === 200) {
        console.log(result.data)
        await clearFormData()
      } else {
        console.log(result.data)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setSubmitting(false) // End form submission
    }
  }
  return (
    <div className="main-container">
      <div className="register-container">
        <h2 className="h2">Sign Up</h2>

        <form onSubmit={submitForm}>
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} className="text-center" style={{ width: '23%' }}>
                <AvatarInput
                  imageURL={imageURL}
                  handleAvatarChange={handleAvatarChange}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Input
                  type="text"
                  name="firstName"
                  placeHolder="First name"
                  handleEvent={handleInputChange}
                  disabled={submitting} // Disable input when submitting
                />
              </Col>
              <Col xs={6}>
                <Input
                  type="text"
                  name="lastName"
                  placeHolder="Last name"
                  handleEvent={handleInputChange}
                  disabled={submitting} // Disable input when submitting
                />
              </Col>
            </Row>
            <Input
              type="email"
              name="email"
              placeHolder="Email address"
              logo={<FontAwesomeIcon icon={faEnvelope} />}
              handleEvent={handleInputChange}
              minLength="6"
              disabled={submitting} // Disable input when submitting
            />
            <Input
              type="password"
              name="password"
              placeHolder="Password"
              logo={<FontAwesomeIcon icon={faKey} />}
              handleEvent={handleInputChange}
              minLength="8"
              disabled={submitting} // Disable input when submitting
            />
            <Input
              type="password"
              name="confirmPassword"
              placeHolder="Confirm password"
              logo={<FontAwesomeIcon icon={faKey} />}
              handleEvent={handleInputChange}
              minLength="8"
              disabled={submitting} // Disable input when submitting
            />
            <Button text="Register" disabled={submitting} />
            <Hyperlink text="Login Instead" link="/login" />
          </Container>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
