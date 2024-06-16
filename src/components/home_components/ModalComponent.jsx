import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import { getUserDataFromLocalStorage } from '../../util/localStorageUtils'
import axios from 'axios'
axios.defaults.withCredentials = true
import Swal from 'sweetalert2'
const ModalComponent = ({ show, handleClose }) => {
  const instance = axios.create({
    withCredentials: true, // Send cookies with requests
  })

  const baseUrl = import.meta.env.VITE_BACKEND_API_ENDPOINT
  const [contentImageUrl, setContentImageUrl] = useState(null)

  const [formData, setFormData] = useState({
    userId: '',
    contentImage: null,
    content: '', // Initialize content with an empty string
  })

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUserDataFromLocalStorage()
      if (user && user.userData) {
        const uid = user.userData.id
        setFormData({
          ...formData,
          userId: uid,
        })
      }
    }

    fetchData()
  }, []) // Empty dependency array to run only once after initial render

  const resetForm = () => {
    setContentImageUrl(null) // Reset the image URL
    setFormData({
      userId: '',
      contentImage: null,
      content: '', // Set content to an empty string
    })
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      setContentImageUrl(reader.result) // Set the image URL
    }

    reader.readAsDataURL(file) // Read the file as a Data URL
    setFormData({
      ...formData,
      contentImage: file, // Set contentImage to the selected file
    })
  }

  const handleModalClose = () => {
    resetForm() // Reset the form when modal is closed
    handleClose()
  }

  const handleSaveChanges = async () => {
    try {
      // Create FormData object to send
      const formDataToSend = new FormData()
      for (const key in formData) {
        formDataToSend.append(key, formData[key])
      }

      console.log(formDataToSend)

      const result = await axios.post(`${baseUrl}/post`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      })
      if (result.status !== 200) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Please try again.',
        })
      }
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Changes saved successfully.',
      })

      console.log('Response:', result.data)
    } catch (error) {
      Swal.fire({
        title: 'Failed to Login',
        text: `${error.response.data.error}`,
        icon: 'error',
      }).then((result) => {
        if (result.isConfirmed) {
          handleModalClose
        }
      })
      console.log(error)
    }

    // After saving changes, close the modal
    handleModalClose()
  }

  const handleContentChange = (event) => {
    setFormData({
      ...formData,
      content: event.target.value,
    })
  }

  return (
    <Modal show={show} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create a Memory</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>What can you say with that memory?</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              style={{ maxHeight: '200px', overflowY: 'auto' }}
              value={formData.content}
              onChange={handleContentChange}
            />
          </Form.Group>
          {contentImageUrl && (
            <div className="text-center">
              <img
                loading="lazy"
                src={contentImageUrl}
                alt="Selected"
                style={{ maxWidth: '100%', maxHeight: '300px' }}
              />
            </div>
          )}
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Attach an image</Form.Label>
            <Form.Control
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={handleImageChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent
