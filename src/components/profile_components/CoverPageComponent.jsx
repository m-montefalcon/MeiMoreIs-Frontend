import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

const CoverPageComponent = ({ coverPhoto }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const fileInputRef = useRef(null)

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click() // Programmatically click the file input
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) {
      setSelectedImage(null) // Clear the image if no file is selected
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      setSelectedImage(reader.result) // Set the Base64 string as the image source
    }
    reader.readAsDataURL(file) // Read the file as a Data URL
  }

  console.log('coverPhoto:', coverPhoto) // Debugging line

  return (
    <>
      {coverPhoto ? (
        <div
          className="p-2"
          style={{
            marginTop: '2%',
            position: 'relative',
            borderRadius: '15px 50px 30px',
            overflow: 'hidden',
            width: '75%',
          }}
        >
          <img
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '15px 50px 30px',
            }}
            src="https://w0.peakpx.com/wallpaper/924/304/HD-wallpaper-arthur-morgan-fire-red-dead-redemption-red-dead-redemption-2.jpg"
            alt="Cover"
          />
        </div>
      ) : (
        <div
          className="p-2"
          style={{
            backgroundColor: '#F9F9F9',
            marginTop: '2%',
            position: 'relative',
            borderRadius: '15px 50px 30px',
            overflow: 'hidden',
            width: '75%',
            cursor: 'pointer',
          }}
          onClick={handleClick}
        >
          <input
            type="file"
            name=""
            id=""
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleFileChange} // Handle file selection here
          />

          <div
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '15px 50px 30px',
            }}
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faImage}
                style={{
                  position: 'absolute',
                  width: '50%',
                  height: '50%',
                  top: '20%',
                  left: '20%',
                  objectFit: 'cover',
                }}
              />
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default CoverPageComponent
