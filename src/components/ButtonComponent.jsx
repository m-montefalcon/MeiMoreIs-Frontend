import React from 'react'
import '../../src/styles/Button.css'
import ButtonBootstrap from 'react-bootstrap/Button'

const ButtonComponent = (props) => {
  return (
    <div className="button-container">
      <ButtonBootstrap
        variant="primary"
        type="submit"
        disabled={props.disabled}
      >
        {props.isSubmitting ? 'Loading' : props.text}
      </ButtonBootstrap>
    </div>
  )
}

export default ButtonComponent
